import {
  CartResponseType,
  Endpoints,
  ProductsResponseType,
} from "@/app/api/types";
import Portal from "../Portal/Portal";
import Footer from "../footer/footer";
import { Header } from "../header/Header";
import { IProps } from "./types";
import { Suspense } from "react";
import Loader from "../../ui/Loader/Loader";
import { getCart, getProducts } from "@/app/api/api";

export default async function MainLayout({ children }: IProps) {
  // const [cart, products]: [CartResponseType, ProductsResponseType] =
  //   await Promise.all([
  //     getCart({ endpoint: Endpoints.cart }),
  //     getProducts({ endpoint: Endpoints.beer }),
  //   ]);

  const products = await getProducts({ endpoint: Endpoints.beer });

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Suspense fallback={<Loader />}>
        <Portal cart={{items:[], priceForAll: 0}} products={products.content} />
      </Suspense>
    </>
  );
}
