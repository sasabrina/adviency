export type Gift = {
  id?: number;
  name: string;
  quantity: number;
  image: string;
  receiver: string;
};

export type GiftsSate = {
  gifts: Gift[];
  isEditing: boolean;
  editGift: Gift | null;
};
