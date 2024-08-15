import Section from '@/app/components/ui/section/section';
import { aboutPageList } from '@/app/static/aboutPageList';
import Image from 'next/image';

export default function ProductionProccesSection() {
  return (
    <Section>
      <h2 className="title typography__h2">Процес виробництва пива</h2>
      <div className="about-page__flex">
        <div className="about-page__left-block">
          <Image
            src="/production-process.jpg"
            width={586}
            height={600}
            alt="production process"
          />
        </div>
        <div className="about-page__right-block">
          <ul className="production-procces-list">
            {aboutPageList.map(({ text, id }) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
