import styles from './button.module.css';
import clsx from 'clsx';

export interface ButtonProps extends React.ComponentProps<'button'> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
}

export function Button({ primary = false, size = 'medium', label, ...props }: ButtonProps) {
  const style = clsx(styles.button, {
    [styles['button--primary']]: primary,
    [styles[`button--${size}`]]: size,
  });

  return (
    <button
      type='button'
      className={style}
      {...props}
    >
      {label}
    </button>
  );
}
