"use client";
import "./cartModal.scss";
import ModalDialog from "./components/ModalDialog";
import { IPropsCartModal } from "./types";
import { useSearchParams } from "next/navigation";

export default function CartModal(props: IPropsCartModal) {
  const searchParams = useSearchParams();
  const modal = searchParams.get("cart");

  return modal && <ModalDialog {...props} />;
}
