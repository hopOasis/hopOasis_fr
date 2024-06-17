import Link from "next/link";
import "./links.scss";
import { IArrowLinkProps, IMainLinkProps } from "./types";
import Icons from "../icons/icons";

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
