"use client";
import { beer } from "@/app/static/bear";
import Gallery from "../../containers/gallery/gallery";
import Card from "../card/Card";
import Icons from "../icons/icons";
import "./cartModal.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartModal() {
  const router = useRouter();
  return (
    <dialog open className="cart-modal">
      <div className="cart-modal__container cart-modal__container--line">
        <p className="cart-modal__title">
          Кошик
          <Link href="#" onClick={() => router.back()}>
            <Icons name="close" stroke="#696969" />
          </Link>
        </p>
      </div>
      <section className="cart-modal__container cart-modal__section ">
        <p className="cart-modal__title">Товари тижня</p>
        <Gallery>
          {Array(3)
            .fill(1)
            .map((el, idx) => (
              <Card {...beer} key={idx} />
            ))}
        </Gallery>
      </section>
    </dialog>
  );
}
