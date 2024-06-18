import Image from 'next/image';
import Link from 'next/link';
import './proposal-card.scss';

type Props = {
  imageUrl: string;
  employee: string;
  proposalText: string;
  beerUrl: string;
  isColumnDirection?: boolean;
};

export const ProposalCard: React.FC<Props> = ({
  imageUrl,
  employee,
  proposalText,
  beerUrl,
  isColumnDirection,
}) => {
  const widthOption = {
    width: '100%',
  };

  const imageStyles = isColumnDirection
    ? { width: '100%' }
    : { height: 'auto' };

  const reviewStyles = isColumnDirection
    ? { padding: '0px 16px 65px 16px' }
    : { padding: '26px 13px 26px 0px' };

  return (
    <article
      className={'proposal-card shadow'}
      style={{ flexDirection: isColumnDirection ? 'column' : 'row' }}
    >
      <div>
        <Image
          style={imageStyles}
          src={imageUrl}
          width={isColumnDirection ? 0 : 302}
          height={isColumnDirection ? 267 : 0}
          alt="Image of our worker"
        />
      </div>

      <div style={reviewStyles}>
        <h4 className="proposal-card__header">{employee}</h4>
        <p className="text-container text">{proposalText}</p>
        <Link className="proposal-card__link" href={beerUrl}>
          Сторінка товару
        </Link>
      </div>
    </article>
  );
};
