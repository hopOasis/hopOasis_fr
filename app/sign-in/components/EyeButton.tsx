import Icons from "@/app/components/ui/icons/icons";
import { IPropsEyeButton } from "./types";

export default function EyeButton({ onClick }: IPropsEyeButton) {
  return (
    <button id="eye" type="button" onClick={onClick}>
      {<Icons name="eye" />}
    </button>
  );
}
