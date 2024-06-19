import Icons from '../icons/icons';
import './buttons.scss';
import { ICardButton, IQuestionButton } from './types';

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
      <Icons name="heart" stroke="#131313" />
    </button>
  );
};


