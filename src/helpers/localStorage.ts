import { Gift } from "@/models";

export const setLocalStorage = (key: string, value: Gift[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);
