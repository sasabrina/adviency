import { useReducer, useEffect, useState } from "react";
import { GiftContext } from "./GiftsContext";
import { Gift } from "@/models";
import { giftsReducer } from "./giftsReducer";
import { getLocalStorage, setLocalStorage } from "@/helpers";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: Gift[] = getLocalStorage("gifts")
  ? JSON.parse(getLocalStorage("gifts") as string)
  : [
      {
        id: 1,
        name: "Medias",
        quantity: 1,
        image: "",
        receiver: "Sabrina",
      },
      {
        id: 2,
        name: "Rompecabezas",
        quantity: 1,
        image: "",
        receiver: "Sabrina",
      },
      {
        id: 3,
        name: "Remeras",
        quantity: 1,
        image: "",
        receiver: "Sabrina",
      },
    ];

export const GiftsProvider = ({ children }: props) => {
  const [giftsState, dispatch] = useReducer(giftsReducer, INITIAL_STATE);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    setLocalStorage("gifts", giftsState);
  }, [giftsState]);

  const handleGiftSubmit = (gift: Gift): void => {
    dispatch({ type: "addGift", payload: gift });
  };

  const handleGiftDelete = (id: Gift["id"]) => {
    dispatch({ type: "deleteGift", payload: id });
  };

  const handleGiftDeleteAll = () => {
    dispatch({ type: "deleteAllGifts" });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <GiftContext.Provider
      value={{
        giftsState,
        handleGiftSubmit,
        handleGiftDelete,
        handleGiftDeleteAll,
        openModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </GiftContext.Provider>
  );
};
