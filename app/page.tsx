"use client";
import "./page.scss";
import Hero from "./components/containers/hero/hero";
import { ActionSection } from "./components/containers/actionSection/actionSection";
import WeakProducts from "./components/containers/weeklyProducts/weakProducts";
import AboutBrewery from "./components/containers/aboutBrewery/aboutBrewery";
import Proposals from "./components/containers/proposals/proposals";
import AnswersAndQuestions from "./components/containers/answersAndQuestions/answersAndQuestions";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

export default function Home() {

  // useEffect(() => {
  //   const root = document.querySelector("main")!;
  //   Scrollbar.init(root, { damping: 0.05 });
  //   return () => Scrollbar.destroyAll();
  // }, []);

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
