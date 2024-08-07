'use client';
import { usePathname } from 'next/navigation';
import './bread-crumbs.scss';
import { routes } from '@/app/static/routes';
import { IProps } from './type';

export default function BreadCrumbs({ product }: IProps) {
  const pathname = usePathname();
  const parsedPathname = pathname.split('/').filter((el) => !!el);

  let items = [];
  if (parsedPathname.length === 1) {
    const route = routes.find(({ href }) => href === pathname);
    items = [<span key={'1'}>{route?.name}</span>];
  } else {
    const route = routes.find(({ href }) => href === `/${parsedPathname[0]}`);
    items = [
      <span key={'2'}>{route?.name}</span>,
      <span key={'3'}>{product?.beerName}</span>,
    ];
  }

  return (
    <h1 className="typography__h4__regular bread-crumbs container t-b-100">
      Khmilna Oaza {...items}
    </h1>
  );
}
