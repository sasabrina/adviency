import { useContext } from "react";
import { IconButton } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { GiftContext } from "@/context";
import { Gift } from "@/models";
import styles from "@/styles.module.scss";
import imgPlaceholder from "@/assets/img_placeholder.jpeg";

export interface GiftsInterface {
  items: Gift[];
}

const Gifts: React.FC<GiftsInterface> = ({ items }) => {
  const {
    handleGiftDelete,
    handleGiftDeleteAll,
    handleIsEditing,
    setEditGift,
    handleOpenModal,
  } = useContext(GiftContext);
  const imgSrc = (imageUrl: string): string =>
    imageUrl ? imageUrl : imgPlaceholder;

  const handleEdit = (gift: Gift): void => {
    setEditGift(gift);
    handleIsEditing(true);
    handleOpenModal();
  };

  return (
    <>
      <ul className={styles.giftsContainer}>
        {items.map((gift, i) => (
          <li key={i} className={styles.gift}>
            <figure className={styles.imgContainer}>
              <img src={imgSrc(gift.image)} alt="gift image" />
            </figure>

            <p className={styles.giftTitle}>
              <span>{gift.name}</span>{" "}
              <span className={styles.giftReceiver}>{gift.receiver}</span>
            </p>

            <IconButton onClick={() => handleEdit(gift)}>
              <EditIcon fontSize="small" />
            </IconButton>

            <IconButton onClick={() => handleGiftDelete(gift.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
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
