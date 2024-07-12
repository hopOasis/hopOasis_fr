import { useEffect } from "react";
import "./popup.scss";
import { IProps } from "./types";
import { animate } from "@/app/utils";

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
            setIsTrueCurrentLocation("no");
            animate.popup.close();
          }}
        >
          Ні
        </button>
        <button
          type="button"
          onClick={() => {
            setIsTrueCurrentLocation("yes");
            animate.popup.close();
          }}
        >
          Так
        </button>
      </div>
    </dialog>
  );
}
