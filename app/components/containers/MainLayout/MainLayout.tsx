import {  ProxiEndpoints } from "@/app/api/types";
import Portal from "../Portal/Portal";
import Footer from "../footer/footer";
import { Header } from "../header/Header";
import { IProps } from "./types";
import { Suspense } from "react";
import Loader from "../../ui/Loader/Loader";


export default async function MainLayout({ children }: IProps) {
  // const [cartRes, productsRes] = await Promise.all([
  //   fetch(ProxiEndpoints.cart),
  //   fetch(ProxiEndpoints.beer),
  // ]);

  // const cart = await cartRes.json();
  // const products = await productsRes.json();

  // console.log(cart);

  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <Suspense fallback={<Loader />}>
        <Portal cart={cart} products={products.content} />
      </Suspense> */}
    </>
  );
}
