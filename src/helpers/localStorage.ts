import { GiftsSate } from "@/models";

export const setLocalStorage = (key: string, value: GiftsSate) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);
