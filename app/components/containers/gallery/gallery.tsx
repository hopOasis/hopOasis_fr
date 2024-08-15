import './gallery.scss';
import { IProps } from './types';

export default function Gallery({ children }: IProps) {
  return <div className="gallery">{children}</div>;
}
