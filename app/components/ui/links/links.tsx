import Link from "next/link";
import "./links.scss";
import { IArrowLinkProps, IMainLinkProps, IPropsLogoLink } from "./types";
import Icons from "../icons/icons";
import { routes } from "@/app/static/routes";
import Image from "next/image";

export default function MainLink({
  href,
  variant = "dark",
  children,
}: IMainLinkProps) {
  return (
    <Link
      href={href}
      className={variant === "dark" ? "main-link dark" : "main-link light"}
    >
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

export const LogoLink = ({ variant = "light" }: IPropsLogoLink) => {
  return (
    <Link href={routes[0].href} className="logo-link">
      <Image
        src={variant === "light" ? "/logo_light.svg" : "/logo_dark.svg"}
        alt="logo Khmilna oaza"
        width={189}
        height={62}
      />
    </Link>
  );
};
