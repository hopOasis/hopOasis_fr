import AnimatedNumbers from 'react-animated-numbers';
import './styles.scss';

export default function AnimatedNumberComponent({number}) {
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
