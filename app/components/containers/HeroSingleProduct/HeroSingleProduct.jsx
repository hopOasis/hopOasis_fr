"use client";
import Rating from "../../ui/Rating/Rating";
import Section from "../../ui/section/section";

export default function HeroSingleProduct() {
  return (
    <Section>
      <Rating
        onChange={(value) => {
          console.log(value);
        }}
      />
    </Section>
  );
}
