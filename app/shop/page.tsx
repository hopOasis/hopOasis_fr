import { Suspense } from "react";
import Filters from "../components/containers/filters/Filters";
import Gallery from "../components/containers/gallery/gallery";
import Card from "../components/ui/card/Card";
import Section from "../components/ui/section/section";
import "./shop.scss";
import MainLayout from "../components/containers/MainLayout/MainLayout";
import { getData } from "../api/api";
import { Endpoints, PruductsResponseType } from "../api/types";
import Loader from "../components/ui/Loader/Loader";

export default async function Page() {
  const products: PruductsResponseType = await getData({
    endpoint: Endpoints.beer,
  });
  return (
    <MainLayout>
      <main className="shop-page">
        <Section>
          <h1 className="typography__h4__regular">
            <span className="t-b-100">Khmilna Oaza</span> | Магазин
          </h1>
          <Suspense>
            <Filters />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Gallery>
              {products.content.map((product) => (
                <Card {...product} key={product.id} />
              ))}
            </Gallery>
          </Suspense>
        </Section>
      </main>
    </MainLayout>
  );
}
