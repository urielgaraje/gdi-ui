import styles from './title.module.css';
import clsx from 'clsx';

interface ComponentProps extends React.ComponentProps<'h1'> {
  primary?: boolean;
  title: string;
}

export function Title({ primary = false, title, ...props }: ComponentProps) {
  const style = clsx(styles.title, {
    [styles['title--primary']]: primary,
  });

  return (
    <h1
      className={style}
      {...props}
    >
      {title}
    </h1>
  );
}
