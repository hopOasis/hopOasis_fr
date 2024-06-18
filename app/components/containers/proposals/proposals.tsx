import { ProposalCard } from '../../ui/ProposalCard/ProposalCard';
import Section from '../../ui/section/section';
import './proposals.scss';

export default function Proposals() {
  return (
    <Section>
      <div className="proposal">
        <h2 className="title">Пропозиції від нашої команди</h2>
        <div className="proposal-container">
          <div className="proposal-block">
            <ProposalCard
              imageUrl={'/olena-proposal.png'}
              employee={'Олeна, технолог'}
              proposalText={
                'Подобається пиво сорту IPA (India Pale Ale) через його характерний гіркий смак, який надається використанням великої кількості хмелю. Також IPA часто має яскравий аромат хмелю, що робить його цікавим для любителів насичених смаків.'
              }
              beerUrl={'/beer/32334'}
            />
            <ProposalCard
              imageUrl={'/andriy-proposal.png'}
              employee={'Андрій, технолог'}
              proposalText={
                'Подобається пиво сорту IPA (India Pale Ale) через його характерний гіркий смак, який надається використанням великої кількості хмелю. Також IPA часто має яскравий аромат хмелю, що робить його цікавим для любителів насичених смаків.'
              }
              beerUrl={'/beer/32334'}
            />
          </div>
          <ProposalCard
            imageUrl={'/oleh-proposal.png'}
            employee={'Олег, технолог'}
            proposalText={
              'Подобається пиво сорту IPA (India Pale Ale) через його характерний гіркий смак, який надається використанням великої кількості хмелю.'
            }
            beerUrl={'/beer/32334'}
            isColumnDirection={true}
          />
        </div>
      </div>
    </Section>
  );
}
