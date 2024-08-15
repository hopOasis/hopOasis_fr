"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icons from "../../../icons/icons";
import { animate } from "@/app/utils";

export default function ModalTop() {
  const router = useRouter();

  return (
    <header className="cart-modal__container cart-modal__header --line">
      <p className="cart-modal__title typography__h3">
        Кошик
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            animate.modal.close({ cb: () => router.back() });
          }}
        >
          <Icons name="close" />
        </Link>
      </p>
    </header>
  );
}
