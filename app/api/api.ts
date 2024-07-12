import axios from "axios";
import { Endpoints, PruductsResponseType } from "./types";
import https from "https";

export async function getProducts() {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const {data} = await axios.get(process.env.API_URL! + Endpoints.beer, {
    httpsAgent: agent,
  });


  //   if (!resProducts.ok) {
  //     throw new Error("Failed to fetch data");
  //   }

  //   const parsedRes: PruductsResponseType = await resProducts.json();


    const newData = {
      ...data,
      content: data.content.map(({ imageName, ...rest }) => ({
        ...rest,
        imageName: imageName.map(
          (name) => process.env.API_URL! + Endpoints.beer + "/images/" + name
        ),
      })),
    };

  return newData;
}
