import { ChangeEvent, WheelEvent } from "react";
import { HTMLInputTypeAttribute } from "react";

export type InputChange = ChangeEvent<HTMLInputElement>;
export type InputWheel = WheelEvent<HTMLInputElement>;

export type TextareaChange = ChangeEvent<HTMLTextAreaElement>;
export type TextareaWheel = WheelEvent<HTMLTextAreaElement>;

export enum InputVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type InputType = Extract<
  HTMLInputTypeAttribute,
  "text" | "password" | "email" | "number" | "tel"
>;

export interface IFormField {
  name: string;
  label?: string;
  type?: InputType;
  placeholder?: string;
  className?: string;
  fieldClassName?: string;
  labelClassName?: string;
  variant?: InputVariants;
  readOnly?: boolean;
}
