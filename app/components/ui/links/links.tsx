import Link from "next/link";
import "./links.scss";
import { IArrowLinkProps, IMainLinkProps } from "./types";
import Icons from "../icons/icons";
import { routes } from "@/app/static/routes";
import Image from "next/image";
import logo from "../../../../public/logo_2.svg";

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
      <Icons name="arrow" stroke="#FF9A00" />
      <Icons name="arrow" stroke="#FF9A00" />
    </Link>
  );
};

export const LogoLink = () => {
  return (
    <Link href={routes[0].href}>
      <Image src={logo} alt={"logo Khmilna oaza"} width={189} height={62} />
    </Link>
  );
};
