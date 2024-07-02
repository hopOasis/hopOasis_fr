import {
  CartResponseType,
  IPropsGetAll,
} from "./types";




export async function postCartData({ endpoint, body }: IPropsGetAll) {
  const res = await fetch(process.env.API_URL! + endpoint, {
    method: "POST",
    body,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const parsedRes: CartResponseType = await res.json();
  console.log(parsedRes);
  return {
    message: "post cart",
  };
}
