import { twMerge } from "tailwind-merge";
import { ClassValue } from "clsx";
import clsx from "clsx";

export const cn = (...inputs: Array<ClassValue>) => {
  return twMerge(clsx(inputs));
};
