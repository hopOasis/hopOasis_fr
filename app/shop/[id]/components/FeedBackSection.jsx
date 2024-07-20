"use client";
import Section from "@/app/components/ui/section/section";
import FeedBackCard from "@/app/components/ui/FeedBackCard/FeedBackCard";
import { feedback } from "@/app/static/feedbacks";
import { CardSlider } from "@/app/components/ui/slider/CardSlider";

export default function FeedBackSection() {
  return (
    <Section>
      <h2 className="title typography__h2">Відгуки</h2>
      <div className="feedback__list">
        <CardSlider
          slidesPerView={2.5}
          products={feedback.map((cart) => (
            <swiper-slide key={cart.id} class="feedback__item shadow">
              <FeedBackCard {...cart} />
            </swiper-slide>
          ))}
        />
      </div>
    </Section>
  );
}
