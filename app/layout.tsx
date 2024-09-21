import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './styles/index.scss';
import 'normalize.css/normalize.css';
import 'swiper/scss';
import StorageUtils from './components/ui/StorageUtils/StorageUtils';
import AgeGateModal from './components/ui/modals/AgeGateModal/AgeGateModal';

const montserrat = Montserrat({
  weight: ['400', '500', '600'],
  style: 'normal',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'Hope Oasis | Головна',
  description:
    'Інтернет-магазин з широким вибором крафтового пива та закусок. Замовляйте унікальні сорти пива з доставкою додому та насолоджуйтеся свіжим смаком.',
  keywords: [
    'крафтове пиво',
    'купити пиво онлайн',
    'замовити пиво з доставкою',
    'інтернет-магазин пива',
    'крафтовий магазин',
    'доставка пива',
    'пивні закуски',
    'унікальні сорти пива',
    'пивні набори',
    'кращі сорти пива',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={montserrat.className}>
        {/* 
        not working with react-select
        <SmoothScrolling /> 
        */}
        {children}
        <AgeGateModal />
        <StorageUtils />
      </body>
    </html>
  );
}
