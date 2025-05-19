import styles from './item.module.css';

export type CardProps = {

  carName: string,
  tagText: string,
  kind: string,
  description: string,
  img: string;
  priceBefore: string;
  priceAfter: string;
  priceMonth: string;
  priceLicense: string;
  priceTotal: string;

  city: string;
  productName: string;
  
  buttonText: string;
  onButtonClick: () => void;
};

export const Item = ({carName, tagText, kind, description, priceBefore, priceAfter, priceMonth, priceLicense, priceTotal, img, city, onButtonClick }: CardProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.name}>{carName}</span>
          <span className={styles.tag}>{tagText}</span>
        </div>
        <span className={styles.kind}>{kind}</span>
        <p className={styles.description}>{description}</p>
        <img
          src={img}
          alt={city}
          className={styles.image}
        />

        <div className={styles.from}>
          <span>From</span>
          <div> 
            <span className={styles.before}>{priceBefore}</span>
            <span className={styles.after}>{priceAfter}</span>
          </div>
        </div>

        <div className={styles.month}>
          <span>Lease/month</span>
          <span>{priceMonth}</span>
        </div>

        <div className={styles.license}>
          <span>License</span>
          <span>{priceLicense}</span>
        </div>

        <div className={styles.total}>
          <span>Total price</span>
          <span>{priceTotal}</span>
        </div>       
      </div>
    </div>
  );
};

export default Item;
