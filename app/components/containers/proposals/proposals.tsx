"use client";
import { proposals } from "@/app/static/proposals";
import { ProposalCard } from "../../ui/ProposalCard/ProposalCard";
import Section from "../../ui/section/section";
import "./proposals.scss";
import { useEffect } from "react";
import gsap from "gsap";

export default function Proposals() {
  useEffect(() => {
    const [first, _, third]: Element[] = gsap.utils.toArray(".proposal-card");
    const fixElementHeight = () =>
      gsap.set(third.children[0].children[0], {
        height: gsap.getProperty(first, "height"),
      });
    fixElementHeight();
    window.addEventListener("resize", fixElementHeight);
    return () => window.removeEventListener("resize", fixElementHeight);
  }, []);
  return (
    <Section>
      <div className="proposal">
        <h3 className="title typography__h2">Пропозиції від нашої команди</h3>

        <div className="proposal-container">
          {proposals.map(({ id, ...props }) => (
            <ProposalCard {...props} key={id} />
          ))}
        </div>
      </div>
    </Section>
  );
}
