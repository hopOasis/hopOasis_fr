import { StaticImageData } from 'next/image';

type ImgType = {
  src: StaticImageData;
  width: number;
  height: number;
};
export type Props = {
  img: ImgType;
  employee: string;
  proposalText: string;
  link: string;
};
