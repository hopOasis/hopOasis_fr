import { ArrowLink } from "@/app/components/ui/links/links";
import "./actionSection.scss";

export const ActionSection: React.FC = () => {
  return (
    <section className="action-section  dark">
      <div className="container ">
        <p className="action-section__date typography__h6 accent">
          Акція діє до 31.05
        </p>
        <h2 className="action-section__title typography__h3">
          Спробуй наш новий смак пива та отримай знижку 20% на всю наступну
          покупку
          <ArrowLink href="/" />
        </h2>
      </div>
    </section>
  );
};
