import './about-page.scss';
import MainLayout from '../components/containers/MainLayout/MainLayout';
import AboutBrewerySection from './components/AboutBrewerySection';
import ProductionProccesSection from './components/ProductionProccesSection';
import ShopsSection from './components/ShopsSection';
import BreadCrumbs from '../components/ui/BreadCrumbs/BreadCrumbs';
import ContactsSection from './components/ContactsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hope Oasis | Про нас',
  description:
    'Дізнайтеся більше про наш інтернет-магазин крафтового пива. Історія створення, місія та цінності, які ми підтримуємо, пропонуючи нашим клієнтам унікальні сорти пива та найкращий сервіс.',
  keywords: [
    'про нас',
    'інформація про магазин',
    'історія компанії',
    'місія магазину',
    'крафтове пиво Україна',
    'інтернет-магазин пива',
    'доставка пива',
    'цінності компанії',
    'крафтові напої',
  ],
};

export default function AboutPage() {
  return (
    <MainLayout>
      <main className="about-page">
        <BreadCrumbs />
        <AboutBrewerySection />
        <ProductionProccesSection />
        <ShopsSection />
        <ContactsSection />
      </main>
    </MainLayout>
  );
}
