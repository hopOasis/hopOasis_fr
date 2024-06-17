import "./page.scss";
import Hero from "./components/containers/hero/hero";
import { ActionSection } from "./components/containers/actionSection/actionSection";
import WeakProducts from "./components/containers/weeklyProducts/weakProducts";
import AboutBrewery from "./components/containers/aboutBrewery/aboutBrewery";
import Proposals from "./components/containers/proposals/proposals";
import AnswersAndQuestions from "./components/containers/answersAndQuestions/answersAndQuestions";

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


console.log('backup brunch');