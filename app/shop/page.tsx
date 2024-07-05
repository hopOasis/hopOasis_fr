import { Suspense } from "react";
import Filters from "../components/containers/filters/Filters";
import Gallery from "../components/containers/gallery/gallery";
import Card from "../components/ui/card/Card";
import Section from "../components/ui/section/section";
import "./shop.scss";
import MainLayout from "../components/containers/MainLayout/MainLayout";
import Loader from "../components/ui/Loader/Loader";
import { Endpoints, ProxiEndpoints, PruductsResponseType } from "../api/types";

export default async function Page() {
  const res = await fetch(ProxiEndpoints.beer);
  const products: PruductsResponseType = await res.json();
  // const resCart = await fetch(process.env.API_URL! + Endpoints.cart);
  // const cart: PruductsResponseType = await resCart.json();
  // console.log("cart", cart)


  return (
    <MainLayout>
      <main className="shop-page">
        <Section>
          <h1 className="typography__h4__regular">
            <span className="t-b-100">Khmilna Oaza</span> | Магазин
          </h1>
          <Filters />
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
