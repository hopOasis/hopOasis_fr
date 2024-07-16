import Icons from "../components/ui/icons/icons";

export const routes = [
  { id: "main", name: "main", href: "/", icon: null },
  { id: "about", name: "Про броварню", href: "/about", icon: null },
  { id: "shop", name: "Магазин", href: "/shop", icon: null },
  {
    id: "delivery",
    name: "Доставка і оплата",
    href: "/dev-payment",
    icon: null,
  },
  { id: "checkout", name: "checkout", href: "/checkout", icon: null },
  {
    id: "search",
    name: "search",
    href: "/search",
    icon: <Icons name="search" />,
  },
  {
    id: "favorites",
    name: "favorites",
    href: "/favorites",
    icon: <Icons name="heart" />,
  },
  {
    id: "sign-in",
    name: "sign-in",
    href: "/sign-in",
    icon: <Icons name="avatar" />,
  },
  {
    id: "sign-up",
    name: "sign-up",
    href: "/sign-up",
    icon: null,
  },
  {
    id: "cart",
    name: "cart",
    href: "?cart=true",
    icon: <Icons name="cart" />,
  },
];
