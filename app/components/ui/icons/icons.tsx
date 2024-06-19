import {
  ArrowIconPath,
  AvatarIconPath,
  ChevronDownIconPath,
  HeartIconPath,
  PhoneIconPath,
  SearchIconPath,
  TrashIconPath,
} from './path';
import { CasesType, IProps } from './types';

export default function Icons({
  name,
  width = 24,
  height = 24,
  stroke = '#FFFBF4',
  fill = 'none',
}: IProps) {
  const cases: CasesType = {
    search: <SearchIconPath stroke={stroke} />,
    phone: <PhoneIconPath stroke={stroke} />,
    heart: <HeartIconPath stroke={stroke} />,
    avatar: <AvatarIconPath stroke={stroke} />,
    trash: <TrashIconPath stroke={stroke} />,
    arrow: <ArrowIconPath stroke={stroke} />,
    chevronDown: <ChevronDownIconPath stroke={stroke} />,
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      {cases[name]}
    </svg>
  );
}
