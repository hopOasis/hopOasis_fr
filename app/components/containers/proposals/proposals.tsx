import { proposals } from "@/app/static/proposals";
import { ProposalCard } from "../../ui/ProposalCard/ProposalCard";
import Section from "../../ui/section/section";
import "./proposals.scss";

export default function Proposals() {
  return (
    <Section>
      <div className="proposal">
        <h2 className="title">Пропозиції від нашої команди</h2>
        <div className="proposal-container">
          {proposals.map((props, idx) => (
            <ProposalCard {...props} key={idx}/>
          ))}
        </div>
      </div>
    </Section>
  );
}
