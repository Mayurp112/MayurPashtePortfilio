import { FaUser, FaServer, FaDatabase, FaAws, FaBolt } from 'react-icons/fa';

/**
 * HeroVisual — an animated "request-flow" architecture diagram that signals
 * backend/systems engineering (replacing the generic monogram).
 *
 * An SVG layer draws the connectors with flowing dashes; HTML chips sit on top
 * as the nodes. Coordinates are percentages so it scales with its container.
 * The flow animation is disabled automatically for reduced-motion users
 * (handled by the global media query in index.css).
 */

// Node positions as [left%, top%].
const NODES = [
  { id: 'client', label: 'Client', icon: FaUser, pos: [50, 10], tone: 'slate' },
  { id: 'gateway', label: 'API Gateway', icon: FaBolt, pos: [50, 37], tone: 'brand' },
  { id: 'api', label: 'FastAPI', icon: FaServer, pos: [50, 63], tone: 'accent', primary: true },
  { id: 'db', label: 'PostgreSQL', icon: FaDatabase, pos: [22, 90], tone: 'brand' },
  { id: 'cloud', label: 'AWS', icon: FaAws, pos: [78, 90], tone: 'accent' },
];

// Connectors between node centers (in the same % space).
const LINES = [
  [50, 10, 50, 37],
  [50, 37, 50, 63],
  [50, 63, 22, 90],
  [50, 63, 78, 90],
];

const TONE = {
  slate: 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300',
  brand: 'border-brand-300 text-brand-600 dark:border-brand-700 dark:text-brand-300',
  accent: 'border-accent-400 text-accent-600 dark:border-accent-500 dark:text-accent-400',
};

export default function HeroVisual() {
  return (
    <div className="animate-float relative mx-auto aspect-square w-full max-w-sm">
      {/* Glass panel */}
      <div className="absolute inset-0 rounded-[2rem] border border-slate-200 bg-white/70 shadow-2xl shadow-brand-600/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60" />

      {/* Connector layer */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {LINES.map(([x1, y1, x2, y2], i) => (
          <g key={i}>
            {/* Static base line */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="stroke-slate-200 dark:stroke-slate-700"
              strokeWidth="0.6"
            />
            {/* Animated flowing dashes */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="flow-line stroke-brand-500 dark:stroke-brand-400"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>

      {/* Node chips */}
      {NODES.map(({ id, label, icon: Icon, pos, tone, primary }) => (
        <div
          key={id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
        >
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-xs font-semibold shadow-sm dark:bg-slate-900 ${TONE[tone]} ${
              primary ? 'ring-2 ring-accent-400/40' : ''
            }`}
          >
            <Icon className="text-sm" aria-hidden="true" />
            {label}
          </div>
          {primary && (
            <span className="absolute inset-0 -z-10 animate-ping rounded-xl bg-accent-400/20" />
          )}
        </div>
      ))}

      {/* Floating stat badge */}
      <div className="absolute -bottom-4 -left-4 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 px-4 py-3 text-white shadow-lg">
        <div className="text-2xl font-bold leading-none">2+</div>
        <div className="text-xs opacity-90">Years Exp.</div>
      </div>
    </div>
  );
}
