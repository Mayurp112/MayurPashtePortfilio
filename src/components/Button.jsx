/**
 * Button — polymorphic button/link with primary & outline variants.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  icon: Icon,
  className = '',
  ...rest
}) {
  const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';
  const classes = `${variantClass} ${className}`;
  const content = (
    <>
      {Icon && <Icon className="text-base" aria-hidden="true" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
