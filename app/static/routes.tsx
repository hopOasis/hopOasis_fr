import Icons from '../components/ui/icons/icons';

export const routes = [
  { id: 'main', name: 'main', href: '/', icon: null },
  { id: 'about', name: 'Про нас', href: '/about-us', icon: null },
  { id: 'shop', name: 'Магазин', href: '/shop', icon: null },
  {
    id: 'delivery',
    name: 'Доставка і оплата',
    href: '/dev-payment',
    icon: null,
  },
  {
    id: 'search',
    name: 'search',
    href: '/search',
    icon: <Icons name="search" />,
  },
  { id: 'phone', name: 'phone', href: '/phone', icon: <Icons name="phone" /> },
  {
    id: 'favorites',
    name: 'favorites',
    href: '/favorites',
    icon: <Icons name="heart" />,
  },
  { id: 'cart', name: 'cart', href: '/cart', icon: <Icons name="trash" /> },
];
