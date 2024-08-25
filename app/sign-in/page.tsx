import { LogoLink } from '../components/ui/links/links';
import Section from '../components/ui/section/section';
import { Palitra } from '../types/types';
import './sign-in.scss';
import { routes } from '../static/routes';
import AuthorizationForm from './components/AuthorizationForm';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: 'Вхід до особистого кабінету - Інтернет-магазин крафтового пива',
    description:
      'Увійдіть до свого особистого кабінету, щоб отримати доступ до персональних налаштувань, перегляду історії замовлень та швидшого оформлення покупок у нашому інтернет-магазині крафтового пива.',
  };
}

export default function SignIn() {
  return (
    <main className="sign-in">
      <Section>
        <div className="sign-in__left-block">
          <LogoLink variant={Palitra.light} />
          <h1 className="typography__h2 t-w-30">Увійдіть або зареєструйтеся</h1>
        </div>
        <div className="sign-in__right-block">
          <h1 className="typography__h2">Вхід</h1>
          <p className="sign-in__sign-up-link typography__h4">
            Новий користувач? 
            <Link href={routes[8].href.pathname}>Зареєструватися</Link>
          </p>
          <AuthorizationForm />
        </div>
      </Section>
    </main>
  );
}
