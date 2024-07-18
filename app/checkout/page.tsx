import { Suspense } from "react";
import "./checkout.scss";
import CheckoutHeader from "./components/CheckoutHeader";
import ChekoutForm from "./components/ChekoutForm";
import Loader from "../components/ui/Loader/Loader";
import { localizationCity } from "../utils";
import { getLocation, getNewPostSettlementsLib } from "../api/api";

export default async function Page() {
  const city = await getLocation();
  // const newPostSettlement = await getNewPostSettlementsLib({ city: localizationCity(city) });
  // console.log(
  //   "parsednewPostCitiesLibrary",
  //   // newPostSettlement.data
  // );
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
