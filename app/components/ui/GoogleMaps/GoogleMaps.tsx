import { IProps } from './types';

export default function GoogleMaps({ width = 800, height = 600 }: IProps) {
  return (
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1k2Y10AP0ZfEQ1ShafMcgTtoq03slDAU&ehbc=2E312F&noprof=1"
      width={width}
      height={height}
      loading="lazy"
      title="Google map"
    />
  );
}
