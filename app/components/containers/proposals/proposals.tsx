import { proposals } from '@/app/static/proposals';
import { ProposalCard } from '../../ui/ProposalCard/ProposalCard';
import Section from '../../ui/section/section';
import './proposals.scss';

export default function Proposals() {
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
