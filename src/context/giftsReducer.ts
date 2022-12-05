import { Gift } from "@/models";

type GiftsAction =
  | { type: "addGift"; payload: Gift["name"] }
  | { type: "deleteGift"; payload: Gift["id"] }
  | { type: "deleteAllGifts" };

export const giftsReducer = (state: Gift[], action: GiftsAction) => {
  switch (action.type) {
    case "addGift":
      const newGift = { id: state.length + 1, name: action.payload };

      return [...state, newGift];

    case "deleteGift":
      return state.filter((gift) => gift.id !== action.payload);

    case "deleteAllGifts":
      return [];
  }
};
