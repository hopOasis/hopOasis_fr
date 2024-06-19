type CasesType = 'about' | 'delivery';

export interface ICases {
  [key: string]: string;
}

export type LinkItem = {
  id: number;
  name: string;
  href: string;
};
