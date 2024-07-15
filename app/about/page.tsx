import "./about-page.scss";
import MainLayout from "../components/containers/MainLayout/MainLayout";
import AboutBrewerySection from "./components/AboutBrewerySection";
import ProductionProccesSection from "./components/ProductionProccesSection";
import ShopsSection from "./components/ShopsSection";

export default function AboutPage() {
  return (
    <MainLayout>
      <main className="about-page">
        <AboutBrewerySection />
        <ProductionProccesSection />
        <ShopsSection />
      </main>
    </MainLayout>
  );
}
