import dynamic from 'next/dynamic';
import './styles.scss';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

export default function AnimatedNumberComponent({ number }) {
  return (
    <p className="animated-number title typography__h2 accent">
      <AnimatedNumbers
        transitions={(index) => ({
          // type: 'spring',
          // duration: index + 2.3,
        })}
        fontStyle={{
          fontSize: 32,
        }}
        animateToNumber={number}
      />
      грн.
    </p>
  );
}
