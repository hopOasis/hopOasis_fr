interface Props {
  coordinates: string;
}

export default function Icon({coordinates}:Props) {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d={coordinates} stroke="#FFFBF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
