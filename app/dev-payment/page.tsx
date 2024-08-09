import MainLayout from "../components/containers/MainLayout/MainLayout";
import BreadCrumbs from "../components/ui/BreadCrumbs/BreadCrumbs";
import DeliveryText from "../components/ui/DeliveryText/DeliveryText";
import Section from "../components/ui/section/section";
import "./dev-payment.scss";

export default function Page() {
  return (
    <MainLayout>
      <main className="dev-payment">
        <Section>
          <BreadCrumbs />
          <h2 className="typography__h2">Доставка і оплата</h2>
          <DeliveryText />
        </Section>
      </main>
    </MainLayout>
  );
}
