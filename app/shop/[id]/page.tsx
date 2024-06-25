import DescriptionDeliverySection from "@/app/components/containers/DescriptionDeliverySection/DescriptionDeliverySection";
import "./single-page.scss";
import { beer } from "@/app/static/bear";

export default function SinglePage() {
  return (
    <main className="single-page">
      <h3>I am a beer</h3>
      <DescriptionDeliverySection description={beer.description} />
    </main>
  );
}
