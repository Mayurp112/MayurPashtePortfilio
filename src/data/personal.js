// Core personal information — edit here to update the whole site.
export const personal = {
  name: 'Mayur Pashte',
  title: 'Software Engineer',
  // Rotating roles used by the Hero typing/animation effect.
  roles: [
    'Python Backend Developer',
    'Cloud & AWS Engineer',
    'GenAI Integration Engineer',
    'API & Systems Designer',
  ],
  tagline: 'Python Backend · AWS · GenAI',
  intro:
    'I build production-grade Python backends and cloud-native systems on AWS — from enterprise automation platforms serving 150,000+ users to event-driven provisioning pipelines and GenAI integrations.',

  // Contact + location
  location: 'Mumbai, India',
  email: 'mayurpashte04@gmail.com',
  phone: '+91 9307880940',

  // Resume file lives in /public (see public/README-ASSETS.md).
  // Prefix with Vite's BASE_URL so the link resolves correctly when the
  // site is served from a project subpath (e.g. /MayurPashtePortfilio/).
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  // Suggested filename when a recruiter downloads the resume.
  resumeFileName: 'Mayur_Pashte_Resume.pdf',

  // Contact form backend (optional). Create a free form at https://formspree.io,
  // then paste your endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
  // If left empty, the form gracefully falls back to opening the user's email app.
  formspreeEndpoint: '',

  // Social / external links
  socials: {
    // TODO: verify this portfolio URL — the original had an unusual spelling.
    portfolio: 'https://mayurp112.github.io/Personal--Portfio/',
    linkedin: 'https://linkedin.com/in/mayur-pashte-803445267',
    github: 'https://github.com/Mayurp112',
  },

  // About section
  summary:
    'Software Engineer with 2+ years building Python backends and cloud-native systems on AWS. Shipped enterprise-scale platforms including an endpoint-automation system serving 150,000+ users across 6,000+ bank branches and an event-driven infrastructure-provisioning pipeline that cut server delivery from days to a hands-off automated workflow. Specialized in FastAPI, PostgreSQL, REST API design, async/event-driven architecture, and GenAI integration (LangChain, AWS Bedrock).',

  objective:
    'To design and own reliable, scalable backend systems at product-driven teams — deepening my expertise in distributed architecture, cloud infrastructure, and applied GenAI while delivering measurable business impact.',

  // Quick highlight stats shown on the Hero / About.
  stats: [
    { label: 'Years of Experience', value: '2+' },
    { label: 'Users Served (Axis platform)', value: '150K+' },
    { label: 'Bank Branches Reached', value: '6,000+' },
    { label: 'Projects Delivered', value: '5' },
  ],
};
