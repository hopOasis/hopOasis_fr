"use client";
import { Suspense } from "react";
import Filters from "../components/containers/filters/Filters";
import Gallery from "../components/containers/gallery/gallery";
import Card from "../components/ui/card/Card";
import Section from "../components/ui/section/section";
import { beer } from "../static/bear";
import "./shop.scss";
import MainLayout from "../components/containers/MainLayout/MainLayout";

export default function Page() {
  return (
    <MainLayout>
      <main className="shop-page">
        <Section>
          <h1>
            <span className="t-b-100">Khmilna Oaza</span> | Магазин
          </h1>
          <Suspense>
            <Filters />
          </Suspense>
          <Gallery>
            {Array(12)
              .fill(1)
              .map(() => (
                <Card {...beer} key={beer.id} />
              ))}
          </Gallery>
        </Section>
      </main>
    </MainLayout>
  );
}
