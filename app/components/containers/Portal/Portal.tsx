"use client";
import { useSearchParams } from "next/navigation";
import CartModal from "../../ui/modals/CartModal";
import { IPropsCartModal } from "../../ui/modals/types";
import { oazaStorage } from "@/app/utils";

export default function Portal(props: IPropsCartModal) {
  const searchParams = useSearchParams();
  const modal = searchParams.get("cart");

  const products = props.products;
  const cartItems = products.filter((item) => oazaStorage.isInStore(item.id));

  const cart = {
    items: cartItems.map((item) => ({
      ...item,
      quantity: oazaStorage.getItemById(item.id).quantity,
    })),
    // priceForAll: cartItems.reduce((acc, { priceLarge, quantity }) => {
    //   return (acc += priceLarge * quantity);
    // }),
  };

  return <>{modal && <CartModal products={props.products} cart={cart} />}</>;
}
