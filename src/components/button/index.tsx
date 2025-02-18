import clsx from 'clsx';
import styles from './button.module.css';
import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};

const variantClasses = {
  primary: styles.button,
  secondary: `${styles.button} ${styles.secondary}`,
  destructive: `${styles.button} ${styles.destructive}`,
};

export const Button = ({ variant = 'primary', size = 'medium', className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(variantClasses[variant], styles[size], className)}
      {...props}
    />
  );
};
