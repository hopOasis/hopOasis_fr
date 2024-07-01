import React, { Suspense } from "react";
import ModalTop from "../components/ui/modals/ModalTop";
import WeeklyProductsModal from "../components/ui/modals/WeeklyProductsModal";
import { getCartData, getData } from "../api/api";
import { CartResponseType, Endpoints } from "../api/types";
import Loader from "../components/ui/Loader/Loader";
import { ProductType } from "../types/types";
import "./cartModal.scss";
import CartList from "../components/containers/CartList/CartList";

export default async function Cart() {
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
    <main className="cart-modal">
      <ModalTop />
      <Suspense fallback={<Loader />}>
        <CartList cart={cart} />
        <WeeklyProductsModal products={products} />
      </Suspense>
    </main>
  );
}
