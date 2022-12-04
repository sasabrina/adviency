import styles from "../../styles.module.scss";

export interface GiftsInterface {
  items: string[];
}

const Gifts: React.FC<GiftsInterface> = ({ items }) => {
  return (
    <ul className={styles.giftsContainer}>
      {items.map((gift, i) => (
        <li key={i}>{gift}</li>
      ))}
    </ul>
  );
};

export default Gifts;
