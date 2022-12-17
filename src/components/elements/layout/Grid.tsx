import classNames from '../../../utils/classNames';

export default function Container({ children, columns }: any) {
  const cols = columns ? columns.split(',') : [2, 3];

  const classObject = {
    'grid gap-4 lg:gap-8': true,
    'grid-cols-2 lg:grid-cols-3 ': !columns,
    'grid-cols-1': cols[0] === '1',
    'grid-cols-2': cols[0] === '2',
    'grid-cols-3': cols[0] === '3',
    'grid-cols-4': cols[0] === '4',
    'sm:grid-cols-1': cols[1] === '1',
    'sm:grid-cols-2': cols[1] === '2',
    'sm:grid-cols-3': cols[1] === '3',
    'sm:grid-cols-4': cols[1] === '4',
    'sm:grid-cols-5': cols[1] === '5',
    'sm:grid-cols-6': cols[1] === '6',
    'md:grid-cols-1': cols[2] === '1',
    'md:grid-cols-2': cols[2] === '2',
    'md:grid-cols-3': cols[2] === '3',
    'md:grid-cols-4': cols[2] === '4',
    'md:grid-cols-5': cols[2] === '5',
    'md:grid-cols-6': cols[2] === '6',
    'lg:grid-cols-2': cols[3] === '2',
    'lg:grid-cols-3': cols[3] === '3',
    'lg:grid-cols-4': cols[3] === '4',
    'lg:grid-cols-5': cols[3] === '5',
    'lg:grid-cols-6': cols[3] === '6',
  };

  const classes: any = classNames(classObject);

  return <div className={classes}>{children}</div>;
}
