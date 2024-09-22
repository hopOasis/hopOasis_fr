import MainLink from './components/ui/links/links';
import { Palitra } from './types/types';

export default function NotFound() {
  return (
    <main className="error-page">
      <div className="error-page__container">
        <h2>Not Found 404</h2>
        <p>Could not find requested resource</p>
        <MainLink variant={Palitra.light} href="/">
          Return Home
        </MainLink>
      </div>
    </main>
  );
}
