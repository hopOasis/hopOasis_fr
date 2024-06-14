import Image from 'next/image';
import Icons from '../../icons/icons';
import { Navigation } from '../../navigation/navigation';
import styles from './header-top.module.scss';

export default function HeaderTop() {
  return (
    <div className={styles['header-top']}>
      <Image
        src={'./logo_2.svg'}
        alt={'logo Khmilna oaza'}
        width={189}
        height={62}
      />
      <Navigation />
      <Icons />
    </div>
  );
}
