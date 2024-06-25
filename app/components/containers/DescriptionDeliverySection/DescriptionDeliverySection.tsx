"use client";
import React, { useState } from "react";
import Section from "../../ui/section/section";
import Title from "./Title";
import DeliveryText from "../../ui/DeliveryText/DeliveryText";
import { IProductCard } from "@/app/types/types";

export default function DescriptionDeliverySection({
  description,
}: Pick<IProductCard, "description">) {
    
  const [active, setActive] = useState(0);
  return (
    <Section>
      <Title active={active} onClick={(idx: number) => setActive(idx)} />
      {[<p>{description}</p>, <DeliveryText />][active]}
    </Section>
  );
}
