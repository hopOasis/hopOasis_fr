import { ProductType } from "../types/types";
import { IProps } from "./types";

export async function getData({ endpoint }: IProps) {
  const res = await fetch(process.env.API_URL! + endpoint);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const parsedRes: ProductType[] = await res.json();
  const result = parsedRes.map(({ imageName, ...rest }) => ({
    ...rest,
    imageName: imageName.map(
      (name) => process.env.API_URL! + endpoint + "/images/" + name
    ),
  }));

  return result;
}
