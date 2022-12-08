import { createContext } from "react";
import { Gift } from "@/models";

export type GiftsContextProps = {
  giftsState: Gift[];
  handleGiftSubmit: (gift: Gift) => void;
  handleGiftDelete: (id: Gift["id"]) => void;
  handleGiftDeleteAll: VoidFunction;
};

export const GiftContext = createContext<GiftsContextProps>(
  {} as GiftsContextProps
);
