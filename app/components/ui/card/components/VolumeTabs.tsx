import { useState } from 'react';

export default function VolumeTabs({ volumeLarge, volumeSmall, itemType }) {
  const [active, setActive] = useState<number>(1);
  const className = 'card__volume-tab typography__h6';

  if (itemType === 'PRODUCT_BUNDLE') return null;

  return (
    <div className="card__volume-tabs">
      {volumeSmall && (
        <button onClick={() => setActive(0)} className={active === 0 ? `${className} active-tab` : className}>
          {volumeSmall} {itemType === 'SNACK' ? 'гр.' : 'л.'}
        </button>
      )}
      {volumeLarge && (
        <button onClick={() => setActive(1)} className={active === 1 ? `${className} active-tab` : className}>
          {volumeLarge} {itemType === 'SNACK' ? 'гр.' : 'л.'}
        </button>
      )}
    </div>
  );
}
