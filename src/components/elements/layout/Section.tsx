import classNames from '../../../utils/classNames';

export default function Section({
  type,
  target,
  size,
  to,
  rounded,
  children,
}: any) {
  const classes: any = classNames({
    'inline-flex justify-center rounded-lg text-sm font-semibold px-4': true,
  });

  if (!classes) {
    return null;
  }

  return <Section className={classes}>{children}</Section>;
}
