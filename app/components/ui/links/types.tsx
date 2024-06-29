export interface IMainLinkProps {
  href: string;
  variant: "light" | "dark";
  children: React.ReactNode;
}

export interface IArrowLinkProps {
  href: string;
}

type variantType = "dark" | "light";

export interface IPropsLogoLink {
  variant?: variantType;
}
