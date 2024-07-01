import { ProductType } from "../types/types";
import {
  CartResponseType,
  IPropsGetAll,
  IPropsGetById,
  PruductsResponseType,
} from "./types";

export async function getData({ endpoint }: IPropsGetAll) {
  const res = await fetch(process.env.API_URL! + endpoint);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const parsedRes: PruductsResponseType = await res.json();
  return {
    ...parsedRes,
    content: parsedRes.content.map(({ imageName, ...rest }) => ({
      ...rest,
      imageName: imageName.map(
        (name) => process.env.API_URL! + endpoint + "/images/" + name
      ),
    })),
  };
}

export async function getById({ endpoint, id }: IPropsGetById) {
  const res = await fetch(process.env.API_URL! + endpoint + "/" + id);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const parsedRes: ProductType = await res.json();
  return {
    ...parsedRes,
    imageName: parsedRes.imageName.map(
      (name) => process.env.API_URL! + endpoint + "/images/" + name
    ),
  };
}

export async function getCartData({ endpoint }: IPropsGetAll) {
  const res = await fetch(process.env.API_URL! + endpoint);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const parsedRes: CartResponseType = await res.json();

  return {
    ...parsedRes,
    items: parsedRes.items.map(({ imageName, ...rest }) => ({
      ...rest,
      imageName: imageName.map(
        (name) => process.env.API_URL! + endpoint + "/images/" + name
      ),
    })),
  };
}
