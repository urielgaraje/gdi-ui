import { Button } from '../button';
import styles from './card.module.css';

export type CardProps = {
  img: string;
  city: string;
  productName: string;
  description: string;
  price: string;
  buttonText: string;
  onButtonClick: () => void;
};

export const CardV1 = ({ img, city, productName, description, price, buttonText, onButtonClick }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          src={img}
          alt={city}
          className={styles.image}
        />
        <div className={styles.details}>
          <h3 className={styles.title}>
            <span>{productName}</span>
            <span>{price}</span>
          </h3>
          <p className={styles.location}>
            <span className={styles.description}>{description}</span>&nbsp;
            <span className={styles.city}>{city}</span>
          </p>
        </div>
      </div>

      <div className={styles.action}>
        <Button
          className={styles.button}
          variant='primary'
          size='large'
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CardV1;
