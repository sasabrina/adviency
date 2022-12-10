import { useContext } from "react";
import { GiftContext } from "@/context";
import { Gift } from "@/models";
import styles from "@/styles.module.scss";
import imgPlaceholder from "@/assets/img_placeholder.jpeg";

export interface GiftsInterface {
  items: Gift[];
}

const Gifts: React.FC<GiftsInterface> = ({ items }) => {
  const { handleGiftDelete, handleGiftDeleteAll } = useContext(GiftContext);
  const imgSrc = (imageUrl: string): string =>
    imageUrl ? imageUrl : imgPlaceholder;

  return (
    <>
      <ul className={styles.giftsContainer}>
        {items.map((gift, i) => (
          <li key={i} className={styles.gift}>
            <figure className={styles.imgContainer}>
              <img src={imgSrc(gift.image)} alt="gift image" />
            </figure>

            <p>{gift.name}</p>

            <button onClick={() => handleGiftDelete(gift.id)}>X</button>
          </li>
        ))}
      </ul>
      <button className={styles.btnDeleteAll} onClick={handleGiftDeleteAll}>
        Borrar todo
      </button>
    </>
  );
};

export default Gifts;
