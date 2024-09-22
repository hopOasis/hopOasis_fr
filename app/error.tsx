'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-page">
      <div className="error-page__container">
        <h2> :( Something went wrong!</h2>
        <p>{error.message}</p>
        <button className='main-link light' type="button" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </main>
  );
}
