import {
  CartResponseType,
  Endpoints,
  ProductsResponseType,
} from "@/app/api/types";
import Footer from "../footer/footer";
import { Header } from "../header/Header";
import { IProps } from "./types";
import { Suspense } from "react";
import Loader from "../../ui/Loader/Loader";
import { getCart, getProducts } from "@/app/api/api";
import { oazaStorage } from "@/app/utils";
import CartModal from "../../ui/modals/cartModal/CartModal";

export default async function MainLayout({ children }: IProps) {
  // const [cart, products]: [CartResponseType, ProductsResponseType] =
  //   await Promise.all([
  //     getCart({ endpoint: Endpoints.cart }),
  //     getProducts({ endpoint: Endpoints.beer }),
  //   ]);

  // const products = await getProducts({ endpoint: Endpoints.beer });
  // const cartItems = products.content.filter((item) =>
  //   oazaStorage.isInStore(item.id)
  // );

  // const cart = {
  //   items: cartItems.map((item) => ({
  //     ...item,
  //     quantity: oazaStorage.getItemById(item.id).quantity,
  //   })),
  //   priceForAll: cartItems.reduce((acc, { priceLarge, quantity },) => {
  //     return (acc += priceLarge * quantity);
  //   },0),
  // };
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <Suspense fallback={<Loader />}>
        <CartModal cart={cart} products={products.content} />
      </Suspense> */}
    </>
  );
}
