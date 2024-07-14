import { ProductType } from "@/app/types/types";

export interface ICardButton {
  id: Pick<ProductType, "id">;
  onClick: (id: Pick<ProductType, "id">) => void;
}
