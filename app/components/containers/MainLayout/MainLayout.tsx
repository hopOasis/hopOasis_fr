import { Endpoints, ProxiEndpoints } from "@/app/api/types";
import Portal from "../Portal/Portal";
import Footer from "../footer/footer";
import { Header } from "../header/Header";
import { IProps } from "./types";
import { Suspense } from "react";
import Loader from "../../ui/Loader/Loader";

// async function getData() {
//   const res = await fetch(
//     "http://prod.eba-33ij8qpt.eu-central-1.elasticbeanstalk.com/cart",
//     {
//       headers: {
//         "Set-Cookie":
//           "JSESSIONID=69E092705B120686B1644C95C87E4769; Path=/; HttpOnly=true;",
//       },
//     }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return await res.json();
// }

export default async function MainLayout({ children }: IProps) {
  const [cartRes, productsRes] = await Promise.all([
    fetch(ProxiEndpoints.cart, { next: { revalidate: 5 } }),
    fetch(ProxiEndpoints.beer),
  ]);

  const cart = await cartRes.json();
  const products = await productsRes.json();

  // console.log(cart);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Suspense fallback={<Loader />}>
        <Portal cart={cart} products={products.content} />
      </Suspense>
    </>
  );
}
