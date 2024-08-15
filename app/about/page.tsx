import "./about-page.scss";
import MainLayout from "../components/containers/MainLayout/MainLayout";
import AboutBrewerySection from "./components/AboutBrewerySection";
import ProductionProccesSection from "./components/ProductionProccesSection";
import ShopsSection from "./components/ShopsSection";
import BreadCrumbs from "../components/ui/BreadCrumbs/BreadCrumbs";
import ContactsSection from "./components/ContactsSection";

export default function AboutPage() {
  return (
    <MainLayout>
      <main className="about-page">
        <BreadCrumbs />
        <AboutBrewerySection />
        <ProductionProccesSection />
        <ShopsSection />
        <ContactsSection/>
      </main>
    </MainLayout>
  );
}
