import { useState } from "react";
import { GiftContext } from "./GiftsContext";
import { Gift } from "@/models";

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
  const [giftsState, setGiftState] = useState<Gift[]>(INITIAL_STATE);

  const handleGiftSubmit = (gift: Gift["name"]): void => {
    const newId = giftsState.length + 1;

    setGiftState([...giftsState, { id: newId, name: gift }]);
  };

  const handleGiftDelete = (id: Gift["id"]) => {
    setGiftState(giftsState.filter((gift) => gift.id !== id));
  };

  return (
    <GiftContext.Provider
      value={{ giftsState, handleGiftSubmit, handleGiftDelete }}
    >
      {children}
    </GiftContext.Provider>
  );
};
