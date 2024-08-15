import { Palitra } from "@/app/types/types";

export interface IMainLinkProps {
  href: string;
  variant: Palitra;
  children: React.ReactNode;
}

export interface IArrowLinkProps {
  href: string;
}

export interface IPropsLogoLink {
  variant?: Palitra;
}
