import Link from 'next/link';
import './navIcons.scss';
import { routes } from '@/app/static/routes';

export default function NavIcons() {
  return (
    <ul className="nav-icons">
      {routes
        .filter(({ icon }) => !!icon)
        .map(({ href, icon, id }) => (
          <li key={id}>
            <Link href={{ ...href }}>{icon}</Link>
          </li>
        ))}
    </ul>
  );
}
