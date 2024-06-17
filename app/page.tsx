import "./page.scss";
import Hero from "./components/containers/hero/hero";
import { ActionSection } from "./components/containers/actionSection/actionSection";
import WeakProducts from "./components/containers/weeklyProducts/weakProducts";
import AboutBrewery from "./components/containers/aboutBrewery/aboutBrewery";
import Proposals from "./components/containers/proposals/proposals";
import AnswersAndQuestions from "./components/containers/answersAndQuestions/answersAndQuestions";

const beer = {
  name: "English IPA, 6%",
  description: "Пиво темне з фруктовими нотками",
  volumeLarge: "0,33",
  priceLarge: 70,
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ActionSection />
      <WeakProducts />
      <AboutBrewery />
      <Proposals />
      <AnswersAndQuestions />
    </main>
  );
}


