import { Gift } from "@/models";

type GiftsAction =
  | { type: "addGift"; payload: Gift }
  | { type: "deleteGift"; payload: Gift["id"] }
  | { type: "deleteAllGifts" };

export const giftsReducer = (state: Gift[], action: GiftsAction) => {
  switch (action.type) {
    case "addGift":
      return state
        .map((gift) => gift.name.toLowerCase())
        .includes(action.payload.name.toLowerCase())
        ? [...state]
        : [
            ...state,
            {
              id: state.length + 1,
              name: action.payload.name,
              quantity: action.payload.quantity,
              image: action.payload.image,
              receiver: action.payload.receiver,
            },
          ];

    case "deleteGift":
      return state.filter((gift) => gift.id !== action.payload);

    case "deleteAllGifts":
      return [];
  }
};
