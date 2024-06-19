import { StaticImageData } from 'next/image';

type ImgType = {
  src: StaticImageData | string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
};
export type Props = {
  img: ImgType;
  employee: string;
  proposalText: string;
  link: string;
};
