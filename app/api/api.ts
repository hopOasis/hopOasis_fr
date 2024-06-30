import { IProps } from "./types";

export async function getData({endpoint}:IProps) {
  const res = await fetch(process.env.API_URL!+endpoint);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
