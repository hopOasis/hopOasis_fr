import Icons from "../components/ui/icons/icons";

export const routes = [
  { name: "main", href: "/", icon: null },
  { name: "Про нас", href: "/about-us", icon: null },
  { name: "Магазин", href: "/shop", icon: null },
  { name: "Доставка і оплата", href: "/dev-payment", icon: null },
  { name: "search", href: "/search", icon: <Icons name="search" /> },
  { name: "phone", href: "/phone", icon: <Icons name="phone" /> },
  { name: "favorites", href: "/favorites", icon: <Icons name="heart" /> },
  { name: "cart", href: "/cart", icon: <Icons name="trash" /> },
];
