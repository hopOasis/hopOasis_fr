import Image from 'next/image';
import { FavButton } from '../../buttons/buttons';
import { GeneratedProductType } from '@/app/types/products';

export default function ImageBlock({ image, name, id }: GeneratedProductType) {
  return (
    <div className="card__image-wrapper">
      <div className="card__image-container">
        <Image src={image?.[0]} width={302} height={302} alt={name} />
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
