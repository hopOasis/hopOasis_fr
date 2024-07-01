import { CartResponseType, Endpoints, PruductsResponseType } from "@/app/api/types";
import Portal from "../Portal/Portal";
import Footer from "../footer/footer";
import { Header } from "../header/Header";
import { IProps } from "./types";
import { getCartData, getData } from "@/app/api/api";

export default async function MainLayout({ children }: IProps) {
  const [cart, products]: [CartResponseType, PruductsResponseType] =
    await Promise.all([
      getCartData({
        endpoint: Endpoints.cart,
      }),
      getData({
        endpoint: Endpoints.beer,
      }),
    ]);
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Portal cart={cart} products={products.content} />
    </>
  );
}
