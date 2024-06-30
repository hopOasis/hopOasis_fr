import "./cartModal.scss";
// import Scrollbar from 'smooth-scrollbar';
import CartList from "../../containers/CartList/CartList";
import ModalTop from "./ModalTop";
import WeeklyProductsModal from "./WeeklyProductsModal";
import { ShopCardType } from "@/app/shop/types";
import { getData } from "@/app/api/api";
import { Endpoints } from "@/app/api/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default  function CartModal() {
  // useEffect(() => {
  //   const root = document.querySelector("dialog")!;
  //   Scrollbar.init(root, { damping: 0.05 });
  // }, []);
  // const products: ShopCardType[] = await getData({
  //   endpoint: Endpoints.beer,
  // });

  // const [element, setElement] = useState<HTMLBodyElement | null>(null);
  // const searchParams = useSearchParams();
  // const modal = searchParams.get("cart");
  // useEffect(() => {
  //   setElement(document.querySelector("body"));
  // }, []);


  return (
    <dialog open className="cart">
      <ModalTop />
      <CartList />
      {/* <WeeklyProductsModal /> */}
    </dialog>
  );
}
