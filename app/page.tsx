"use client";
import "./page.scss";
// import Scrollbar from "smooth-scrollbar";
import AboutBrewery from "./components/containers/aboutBrewery/aboutBrewery";
import { ActionSection } from "./components/containers/actionSection/actionSection";
import AnswersAndQuestions from "./components/containers/answersAndQuestions/answersAndQuestions";
import Hero from "./components/containers/hero/hero";
import Proposals from "./components/containers/proposals/proposals";
import WeakProducts from "./components/containers/weeklyProducts/weakProducts";
import MainLayout from "./components/containers/MainLayout/MainLayout";

export default function Home() {
  // useEffect(() => {
  //   const root = document.querySelector("main")!;
  //   Scrollbar.init(root, { damping: 0.05 });
  //   return () => Scrollbar.destroyAll();
  // }, []);

  return (
    <MainLayout>
      <main>
        <Hero />
        <ActionSection />
        <WeakProducts />
        <AboutBrewery />
        <Proposals />
        <AnswersAndQuestions />
      </main>
    </MainLayout>
  );
}
