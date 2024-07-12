import { Suspense } from "react";
import { ProxiEndpoints } from "../api/types";
import "./checkout.scss";
import CheckoutHeader from "./components/CheckoutHeader";
import ChekoutForm from "./components/ChekoutForm";
import Loader from "../components/ui/Loader/Loader";
import { localizationCity } from "../utils";

export default async function Page() {
  const geolocation = await fetch(ProxiEndpoints.geolocation);
  const { city } = await geolocation.json();
  const newPostCitiesLibrary = await fetch(ProxiEndpoints.newPostSettlements, {
    method: "POST",
    body: JSON.stringify({ city: localizationCity(city) }),
  });
  const parsednewPostCitiesLibrary = await newPostCitiesLibrary.json();

  // console.log("parsednewPostCitiesLibrary", parsednewPostCitiesLibrary);
  return (
    <>
      <CheckoutHeader />
      <main className="checkout container">
        <Suspense fallback={<Loader />}>
          <ChekoutForm location={localizationCity(city)} />
        </Suspense>
      </main>
    </>
  );
}
