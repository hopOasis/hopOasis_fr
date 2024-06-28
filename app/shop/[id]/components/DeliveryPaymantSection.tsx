import Section from "@/app/components/ui/section/section";
import Title from "./Title";
import DeliveryText from "@/app/components/ui/DeliveryText/DeliveryText";
import { IPropsDeliveryPaymentSection } from "../types";

export default function DeliveryPaymantSection({
  description,
  activeTab,
  onClick,
}: IPropsDeliveryPaymentSection) {
  return (
    <Section>
      <Title active={activeTab} onClick={onClick} />
      {[<p>{description}</p>, <DeliveryText />][activeTab]}
    </Section>
  );
}
