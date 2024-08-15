import { FormStateType } from "../checkout/types";

export type ContactsFormType = Pick<FormStateType, "firstName" | "phone">;