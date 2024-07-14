import { oazaStorage } from "@/app/utils";
import Icons from "../icons/icons";
import "./buttons.scss";
import { ICardButton } from "./types";
import { Palitra } from "@/app/types/types";
import revalidate from "@/app/actions";

export const CardButton = ({ id, onClick }: ICardButton) => {
  const isInCart = oazaStorage.isInStore(id);
  const handleClick = (id) => {
    onClick(id);
    revalidate();
  };
  return (
    <button
      type="button"
      className={`card-button main-link ${
        !isInCart ? Palitra.dark : Palitra.light
      }`}
      onClick={() => handleClick(id)}
    >
      {!isInCart ? "У кошик" : "Додано у кошик"}
    </button>
  );
};

export const FavButton = ({ onClick }: ICardButton) => {
  return (
    <button type="button" className="fav-button" onClick={onClick}>
      <Icons name="heart" />
    </button>
  );
};
