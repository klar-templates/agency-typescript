import classNames from '../../../utils/classNames';

export default function Section({ children, type }: any) {
  const classes: any = classNames({
    'py-20 sm:py-32': !type,
    'py-3 sm:py-4': type === 'normal',
  });

  return <section className={classes}>{children}</section>;
}
