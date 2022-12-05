import { useContext } from "react";
import { GiftContext } from "@/context";
import { Gift } from "@/models";
import styles from "@/styles.module.scss";

export interface GiftsInterface {
  items: Gift[];
}

const Gifts: React.FC<GiftsInterface> = ({ items }) => {
  const { handleGiftDelete } = useContext(GiftContext);

  return (
    <ul className={styles.giftsContainer}>
      {items.map((gift, i) => (
        <li key={i} className={styles.gift}>
          <span>{gift.name}</span>

          <button onClick={() => handleGiftDelete(gift.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default Gifts;
