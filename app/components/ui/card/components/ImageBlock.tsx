import Image from 'next/image';
import { FavButton } from '../../buttons/buttons';

export default function ImageBlock({
  image,
  name,
  id,
}: { image: string; id: number; name: string }) {
  return (
    <div className="card__image-wrapper">
      <div className="card__image-container">
        <Image src={image} width={302} height={302} alt={name} />
      </div>
      <FavButton
        id={id}
        onClick={() => {
          console.log('fav-button', id);
        }}
      />
    </div>
  );
}
