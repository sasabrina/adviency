import { createContext } from "react";
import { Gift, GiftsSate } from "@/models";

export type GiftsContextProps = {
  giftsState: GiftsSate;
  handleGiftSubmit: (gift: Gift) => void;
  handleGiftDelete: (id: Gift["id"]) => void;
  handleGiftEdit: (gift: Gift) => void;
  openModal: boolean;
  handleOpenModal: VoidFunction;
  handleCloseModal: VoidFunction;
  isEditing: boolean;
  handleGiftDeleteAll: VoidFunction;
  handleIsEditing: (param: boolean) => void;
  setEditGift: (gift?: Gift) => void;
};

export const GiftContext = createContext<GiftsContextProps>(
  {} as GiftsContextProps
);
