import Icons from '../components/ui/icons/icons';

export const routes = [
  {
    id: 'main',
    name: 'main',
    href: { pathname: '/' },
    icon: null,
  },
  {
    id: 'about',
    name: 'Про броварню',
    href: { pathname: '/about' },
    icon: null,
  },
  {
    id: 'shop',
    name: 'Магазин',
    href: { pathname: '/shop' },
    icon: null,
  },
  {
    id: 'delivery',
    name: 'Доставка і оплата',
    href: { pathname: '/dev-payment' },
    icon: null,
  },
  {
    id: 'checkout',
    name: 'checkout',
    href: { pathname: '/checkout' },
    icon: null,
  },
  {
    id: 'search',
    name: 'search',
    href: { pathname: '/search' },
    icon: <Icons name="search" />,
  },
  {
    id: 'favorites',
    name: 'favorites',
    href: { pathname: '/favorites' },
    icon: <Icons name="heart" />,
  },
  {
    id: 'sign-in',
    name: 'sign-in',
    href: { pathname: '/sign-in' },
    icon: <Icons name="avatar" />,
  },
  {
    id: 'sign-up',
    name: 'sign-up',
    href: { pathname: '/sign-up' },
    icon: null,
  },
  {
    id: 'cart',
    name: 'cart',
    href: { query: { cart: true } },
    icon: <Icons name="cart" />,
  },
];
