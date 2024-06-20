import Icons from '../components/ui/icons/icons';

export const routes = [
  { id: "main", name: "main", href: "/", icon: null },
  { id: "about", name: "Про нас", href: "/about-us", icon: null },
  { id: "shop", name: "Магазин", href: "/shop", icon: null },
  {
    id: "delivery",
    name: "Доставка і оплата",
    href: "/dev-payment",
    icon: null,
  },
  {
    id: "search",
    name: "search",
    href: "/search",
    icon: <Icons name="search" width={20} height={20}/>,
  },
  {
    id: "favorites",
    name: "favorites",
    href: "/favorites",
    icon: <Icons name="heart" />,
  },
  { id: "avatar", name: "avatar", href: "/sign-in", icon: <Icons name="avatar" /> },

  { id: "cart", name: "cart", href: "/cart", icon: <Icons name="trash" /> },
];
