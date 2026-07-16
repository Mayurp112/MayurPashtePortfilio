/** Badge — small pill for tech-stack tags. */
export default function Badge({ children, className = '' }) {
  return <span className={`chip ${className}`}>{children}</span>;
}
