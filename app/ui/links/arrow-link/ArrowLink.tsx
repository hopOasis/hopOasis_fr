import Link from 'next/link';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import styles from './arrow-link.module.scss';

export const ArrowLink = () => {
  return (
    <button type="button" className={styles['arrow-link']}>
      <HiArrowNarrowRight
        style={{
          color: '#FFFBF4',
          width: '24px',
          height: '24px',
          alignSelf: 'center',
        }}
      />
    </button>
  );
};
