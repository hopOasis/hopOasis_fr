

export interface IFeedbackCard {
  img: string;
  author: string;
  rating: number;
  feedback: string;
}

export type FormFieldType = {
  id: string;
  type: string;
  placeholder: string;
  checked?: boolean;
  validation: (value: string) => boolean;
};

export enum Palitra {
  light = 'light',
  dark = 'dark',
  white = 'white',
  blue = 'blue',
}

export interface WithChildren {
  children: React.ReactElement;
}

export interface WithNode {
  children: React.ReactNode;
}
