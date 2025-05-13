import clsx from 'clsx';
import { Button } from '../button';
import styles from './heading.module.css';

import { useStorybookTheme } from '../../hooks/useStorybookTheme';

export type HeadingProps = {
  orientation?: 'column' | 'row';
  eyeblow: string,
  title: string,
  description: string,
  buttonText: string;
  onButtonClick: () => void;
};

const variantClasses = {
  column: styles.content,
  row: `${styles.content} ${styles.row}`,
};

export const Heading = ({orientation = 'column', eyeblow, title, description, buttonText, onButtonClick }: HeadingProps) => {

  const theme = useStorybookTheme();
  const getTheme = () => theme === 'dark' ? styles.dark : styles.light;

  return (
    <div className={clsx(styles.heading, getTheme())}>

      <div className={clsx(variantClasses[orientation])}>
        <div>
          <span className={styles.eyeblow}>{eyeblow}</span>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.underline}></div>
        </div>
        <div>
          <p className={clsx(styles.description, getTheme())}>{description}</p>
          <Button
            className={clsx(styles.button, getTheme())}
            size='large'
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
