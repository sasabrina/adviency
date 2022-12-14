import { Gift } from "@/models";

export const giftExists = (gifts: Gift[], gift: Gift) => {
  return gifts.find(
    (item) => item.receiver === gift.receiver && item.name === gift.name
  );
};
