'use client';
import DeliveryText from '@/app/components/ui/DeliveryText/DeliveryText';
import Section from '@/app/components/ui/section/section';
import { useState } from 'react';
import Title from './Title';
import { IPropsDeliveryPaymentSection } from './types';

export default function DeliveryPaymantSection({
  description,
}: IPropsDeliveryPaymentSection) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="delivery-payment">
      <Title active={activeTab} onClick={(idx) => setActiveTab(idx)} />
      {[<p key="1">{description}</p>, <DeliveryText key="2" />][activeTab]}
    </Section>
  );
}
