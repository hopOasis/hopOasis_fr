import Image from 'next/image';
import Section from '../../ui/section/section';
import './aboutBrewery.scss';
import { useRouter } from 'next/router';
import { CardButton } from '../../ui/buttons/buttons';
import AboutLink from '../../ui/links/about-link/about-link';
import MainLink from '../../ui/links/links';

export default function AboutBrewery() {
  return (
    <Section>
      <h2 className="title">Про броварню</h2>
      <Image
        style={{ marginBottom: '24px' }}
        src={'/about-section.png'}
        height={500}
        width={0}
        layout="responsive"
        alt={'image of beautiful brewery'}
      />
      <p style={{ marginBottom: '24px' }} className="text">
        Хмільна оаза - це броварня, яка створена для справжніх поціновувачів
        крафтового пива. У цьому закладі ви знайдете широкий вибір унікальних
        сортів пива, виготовлених з використанням найкращих інгредієнтів та за
        особливими рецептами. Атмосфера Хмільної оази сприяє відпочинку та
        насолоді пивом, а також можливість спробувати нові смаки і відчути
        справжню майстерність пивоварів. Це ідеальне місце для тих, хто цінує
        якість, смак і атмосферу справжньої пивної культури.
      </p>
      <MainLink href={'/about'} variant="dark">
        Дізнатися більше
      </MainLink>
    </Section>
  );
}
