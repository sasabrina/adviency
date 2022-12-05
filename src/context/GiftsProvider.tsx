import { useState, useReducer } from "react";
import { GiftContext } from "./GiftsContext";
import { Gift } from "@/models";
import { giftsReducer } from "./giftsReducer";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: Gift[] = [
  {
    id: 1,
    name: " Medias",
  },
  {
    id: 2,
    name: "Rompecabezas",
  },
  {
    id: 3,
    name: "Remeras",
  },
];

export const GiftsProvider = ({ children }: props) => {
  const [giftsState, dispatch] = useReducer(giftsReducer, INITIAL_STATE);

  const handleGiftSubmit = (gift: Gift["name"]): void => {
    dispatch({ type: "addGift", payload: gift });
  };

  const handleGiftDelete = (id: Gift["id"]) => {
    dispatch({ type: "deleteGift", payload: id });
  };

  const handleGiftDeleteAll = () => {
    dispatch({ type: "deleteAllGifts" });
  };

  return (
    <GiftContext.Provider
      value={{
        giftsState,
        handleGiftSubmit,
        handleGiftDelete,
        handleGiftDeleteAll,
      }}
    >
      {children}
    </GiftContext.Provider>
  );
};
