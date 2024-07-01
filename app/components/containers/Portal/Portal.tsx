"use client";
import { useSearchParams } from "next/navigation";
import CartModal from "../../ui/modals/CartModal";
import { IPropsCartModal } from "../../ui/modals/types";

export default function Portal(props: IPropsCartModal) {
  const searchParams = useSearchParams();
  const modal = searchParams.get("cart");

  return <>{modal && <CartModal {...props} />}</>;
}
