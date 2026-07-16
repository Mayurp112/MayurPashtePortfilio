import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
} from 'react-icons/fa';
import { personal } from '../data/personal';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import { fadeInLeft, fadeInRight, viewportOnce } from '../utils/animations';

const EMPTY = { name: '', email: '', message: '' };

/**
 * Contact — contact details + a form with a real submission state machine.
 *
 * If `personal.formspreeEndpoint` is set, the form POSTs to Formspree (AJAX,
 * no page reload) and shows an inline success/error toast. Otherwise it falls
 * back to opening the visitor's email client via `mailto:`.
 */
export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  // status: 'idle' | 'submitting' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear any prior result once the user starts editing again.
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const endpoint = personal.formspreeEndpoint;

    // No backend configured → mailto handoff, but still confirm to the user.
    if (!endpoint) {
      mailtoFallback();
      setStatus('success');
      setForm(EMPTY);
      return;
    }

    try {
      setStatus('submitting');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const details = [
    { icon: FaEnvelope, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: FaPhone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: personal.location, href: null },
  ];

  const submitting = status === 'submitting';

  return (
    <section id="contact" className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Let's connect"
          title="Get In Touch"
          subtitle="Have an opportunity or a question? I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact details */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {details.map((d) => {
              const Inner = (
                <>
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
                    <d.icon />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{d.label}</div>
                    <div className="font-medium text-slate-800 dark:text-slate-200">{d.value}</div>
                  </div>
                </>
              );
              return d.href ? (
                <a key={d.label} href={d.href} className="card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1">
                  {Inner}
                </a>
              ) : (
                <div key={d.label} className="card flex items-center gap-4 p-5">
                  {Inner}
                </div>
              );
            })}

            <div className="card p-5">
              <div className="mb-3 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Find me online</div>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="card space-y-4 p-6"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:text-slate-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:text-slate-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project..."
                className="w-full resize-none rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:text-slate-200"
              />
            </div>

            <Button
              icon={submitting ? undefined : FaPaperPlane}
              className="w-full"
              type="submit"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <FaSpinner className="animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>

            {/* Inline result toast */}
            <div aria-live="polite" className="min-h-[1.25rem]">
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                  >
                    <FaCheckCircle aria-hidden="true" />
                    {personal.formspreeEndpoint
                      ? 'Thanks! Your message has been sent.'
                      : 'Your email app should now be open — thanks for reaching out!'}
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 rounded-lg bg-rose-50 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                  >
                    <FaExclamationCircle aria-hidden="true" />
                    Something went wrong. Please email me directly at {personal.email}.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
