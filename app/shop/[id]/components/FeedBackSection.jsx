"use client";
import Section from "@/app/components/ui/section/section";
import FeedBackCard from "@/app/components/ui/FeedBackCard/FeedBackCard";
import { feedback } from "@/app/static/feedbacks";

export default function FeedBackSection() {
  return (
    <Section>
      <h2 className="title">Відгуки</h2>
      <ul className="feedback__list">
        {feedback.map((el, idx) => (
          <li className="feedback__item shadow" key={idx}>
            <FeedBackCard {...el} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
