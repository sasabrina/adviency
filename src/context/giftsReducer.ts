import { giftExists } from "@/helpers/gifts";
import { Gift, GiftsSate } from "@/models";

type GiftsAction =
  | { type: "addGift"; payload: Gift }
  | { type: "deleteGift"; payload: Gift["id"] }
  | { type: "editGift"; payload: Gift }
  | { type: "setEditGift"; payload: Gift | null }
  | { type: "deleteAllGifts" };

export const giftsReducer = (
  state: GiftsSate,
  action: GiftsAction
): GiftsSate => {
  switch (action.type) {
    case "addGift":
      return {
        ...state,
        gifts: giftExists(state.gifts, action.payload)
          ? [...state.gifts]
          : [
              ...state.gifts,
              {
                id: state.gifts.length + 1,
                name: action.payload.name,
                quantity: action.payload.quantity,
                image: action.payload.image,
                receiver: action.payload.receiver,
              },
            ],
      };

    case "editGift":
      return {
        ...state,
        gifts: state.gifts.map((gift) =>
          gift.id === action.payload.id ? action.payload : gift
        ),
      };

    case "setEditGift":
      return {
        ...state,
        editGift: action.payload ? action.payload : null,
      };

    case "deleteGift":
      return {
        ...state,
        gifts: state.gifts.filter((gift) => gift.id !== action.payload),
      };

    case "deleteAllGifts":
      return { ...state, gifts: [] };
  }
};
