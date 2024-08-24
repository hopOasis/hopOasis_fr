import Link from "next/link";
import "./links.scss";
import { IArrowLinkProps, IMainLinkProps, IPropsLogoLink } from "./types";
import Icons from "../icons/icons";
import { routes } from "@/app/static/routes";
import Image from "next/image";
import { Palitra } from "@/app/types/types";

export default function MainLink({
  href,
  variant = Palitra.dark,
  children,
}: IMainLinkProps) {
  const cases = {
    light: "typography__h3 main-link light",
    dark: "typography__h3 main-link dark",
    white: "typography__h5 main-link white",
    blue: "typography__h5 main-link blue",
  };
  return (
    <Link href={href} className={cases[variant]}>
      {children}
    </Link>
  );
}

export const ArrowLink = ({ href }: IArrowLinkProps) => {
  return (
    <Link href={href} className="arrow-link">
      <Icons name="arrow" />
    </Link>
  );
};

export const LogoLink = ({ variant = Palitra.light }: IPropsLogoLink) => {
  return (
    <Link href={routes[0].href.pathname} className="logo-link">
      <Image
        src={variant === Palitra.light ? "/logo_light.svg" : "/logo_dark.svg"}
        alt="logo Khmilna oaza"
        width={189}
        height={62}
        priority
      />
    </Link>
  );
};
