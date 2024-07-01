import { CartResponseType, Endpoints } from "@/app/api/types";
import Portal from "../Portal/Portal";
import Footer from "../footer/footer";
import { Header } from "../header/Header";
import { IProps } from "./types";
import { ProductType } from "@/app/types/types";
import { getCartData, getData } from "@/app/api/api";

export default async function MainLayout({ children }: IProps) {
  const [cart, products]: [CartResponseType, ProductType[]] = await Promise.all(
    [
      getCartData({
        endpoint: Endpoints.cart,
      }),
      getData({
        endpoint: Endpoints.beer,
      }),
    ]
  );
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Portal cart={cart} products={ products} />
    </>
  );
}
