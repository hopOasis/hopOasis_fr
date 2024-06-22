"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icons from "../icons/icons";

export default function ModalTop() {
  const router = useRouter();

  return (
    <header className="cart-modal__container --line">
      <p className="cart-modal__title">
        Кошик
        <Link href="#" onClick={() => router.back()}>
          <Icons name="close" stroke="#696969" />
        </Link>
      </p>
    </header>
  );
}
