import Icons from '../icons/icons';
import './buttons.scss';
import { ICardButton } from './types';

export const CardButton = ({ onClick }: ICardButton) => {
  return (
    <button type="button" className="card-button" onClick={onClick}>
      У кошик
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
