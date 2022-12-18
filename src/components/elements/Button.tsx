import classNames from '../../utils/classNames';

export default function Button({
  type,
  target,
  size,
  to,
  rounded,
  className,
  children,
}: any) {
  const classes: any = classNames({
    'inline-flex justify-center rounded text-sm font-semibold': true,
    'text-on-background bg-background ring-1 ring-outline drop-shadow hover:drop-shadow-lg':
      type === 'elevated',
    'text-on-primary bg-primary ring-1 ring-on-primary hover:bg-primary-dark over:text-on-primary-dark':
      type === 'filled',
    'text-on-surface-variant bg-outline ring-1 ring-outline hover:drop-shadow ':
      type === 'tonal',
    'text-inverse-on-background bg-neutral-dark ring-1 ring-outline hover:drop-shadow hover:bg-neutral-normal':
      type === 'filled-inverse',
    'bg-background text-on-background ring-1 ring-outline hover:drop-shadow':
      type === 'outlined',
    'text-background bg-background hover:ring-1 hover:ring-outline':
      type === 'text',
    'py-1.5 px-4': size === 'lg',
    'py-2 px-3': !size,
    'py-1 px-2': size === 'sm',
    'rounded-full': rounded,
  });

  if (!classes) {
    return null;
  }

  if (to) {
    return (
      <a href={to} className={classes} target={target ? target : undefined}>
        <span className="inline-flex items-center">
          <span>
            {children}
            {/* {' '}<span aria-hidden="true" className="text-black/25">→</span> */}
          </span>
        </span>
      </a>
    );
  }
  return (
    <button type="button" className={classes}>
      <span className="inline-flex items-center">
        <span>{children} </span>
      </span>
    </button>
  );
}
