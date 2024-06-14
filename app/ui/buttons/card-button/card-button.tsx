import styles from './card-button.module.scss';
export const CardButton = () => {
  return (
    <button type="button" className={styles['card-button']}>
      У кошик
    </button>
  );
};
