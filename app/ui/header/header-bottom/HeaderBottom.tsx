import { ArrowLink } from '../../links/arrow-link/ArrowLink';
import styles from './header-bottom.module.scss';

export const HeaderBottom: React.FC = () => {
  return (
    <div className={styles['header-bottom']}>
      <p className={styles['header-bottom__date']}>Акція діє до 31.05</p>
      <div className={styles['header-bottom__sales']}>
        <h2 className={styles['header-bottom__info']}>
          Спробуй наш новий смак пива та отримай знижку 20% на всю наступну
          покупку
        </h2>
        <ArrowLink />
      </div>
    </div>
  );
};
