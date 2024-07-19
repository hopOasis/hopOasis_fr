"use client";
import Section from "@/app/components/ui/section/section";
import Title from "./Title";
import DeliveryText from "@/app/components/ui/DeliveryText/DeliveryText";
import { IPropsDeliveryPaymentSection } from "../types";
import { useState } from "react";

export default function DeliveryPaymantSection({
  description,
}: IPropsDeliveryPaymentSection) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="delivery-payment">
      <Title active={activeTab} onClick={(idx) => setActiveTab(idx)} />
      {[<p>{description}</p>, <DeliveryText />][activeTab]}
    </Section>
  );
}
