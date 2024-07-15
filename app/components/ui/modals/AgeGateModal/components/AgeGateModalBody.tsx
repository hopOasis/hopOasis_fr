import { animate, oazaStorage } from "@/app/utils";
import { useEffect } from "react";
import { IPropsAgeGateModal } from "../types";

export default function AgeGateModalBody({ setShow }: IPropsAgeGateModal) {
  useEffect(() => {
    const animation = animate.ageGateModal.open();
    return () => animation.revert();
  }, []);
  return (
    <div className="age-gate-modal__backdrop">
      <div className="age-gate-modal dark">
        <img src="/logo_light.svg" alt="logo" />
        <p className="typography__h1 t-w-500">Вам виповнилось 18?</p>
        <div>
          <button
            className="main-link light"
            type="button"
            onClick={() =>
              animate.ageGateModal.close({
                cb: () => {
                  oazaStorage.setSecure();
                  setShow(false);
                },
              })
            }
          >
            Так
          </button>
          <button
            className="main-link light"
            type="button"
            onClick={() =>
              animate.ageGateModal.close({ cb: () => setShow(false) })
            }
          >
            Ні
          </button>
        </div>
      </div>
    </div>
  );
}
