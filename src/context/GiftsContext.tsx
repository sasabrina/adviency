import { createContext } from "react";
import { Gift } from "@/models";

export type GiftsContextProps = {
  giftsState: Gift[];
  handleGiftSubmit: (gift: Gift["name"]) => void;
  handleGiftDelete: (id: Gift["id"]) => void;
};

export const GiftContext = createContext<GiftsContextProps>(
  {} as GiftsContextProps
);
