import { useEffect } from "react";
import "./popup.scss";
import { IProps } from "./types";
import { animate } from "@/app/utils";
import { revalidateCheckout } from "@/app/actions";

export default function Popup({ city, setIsTrueCurrentLocation }: IProps) {
  useEffect(() => {
    animate.popup.open();
  }, []);
  return (
    <dialog open className="popup">
      <p>
        Ви знаходитесь у м. <span>{city}</span>?
      </p>
      <div>
        <button
          type="button"
          onClick={() => {
            setIsTrueCurrentLocation(false);
            animate.popup.close();
          }}
        >
          Ні
        </button>
        <button
          type="button"
          onClick={() => {
            setIsTrueCurrentLocation(true);
            animate.popup.close();
            revalidateCheckout();
          }}
        >
          Так
        </button>
      </div>
    </dialog>
  );
}
