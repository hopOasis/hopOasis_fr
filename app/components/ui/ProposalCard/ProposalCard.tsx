import Image from "next/image";
import Link from "next/link";
import "./proposal-card.scss";
import { Props } from "./types";

export const ProposalCard = ({
  img: { src, width, height },
  employee,
  proposalText,
  link,
}: Props) => {

  return (
    <article className="proposal-card shadow">
      <div className="proposal-card__image-wrapper">
        <Image
          src={src}
          width={width}
          height={height}
          alt="Image of our worker"
          placeholder="blur"
        />
      </div>

      <div className="proposal-card__info">
        <h4 className="proposal-card__header typography__h5">{employee}</h4>
        <p className="text-container tex-overflow">{proposalText}</p>
        <Link className="proposal-card__link accent" href={link}>
          Сторінка товару
        </Link>
      </div>
    </article>
  );
};
