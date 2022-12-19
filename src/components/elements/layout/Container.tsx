import classNames from '../../../utils/classNames';

export default function Container({ children, className }: any) {
  const classes: any = classNames({
    'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl': !className,
    [className]: className,
  });

  return <div className={classes}>{children}</div>;
}
