import "./icons.scss";
import { IProps } from "./types";

export default function Icons({ name, ...props }: IProps) {
  return (
    <svg {...props} role="img" aria-label="title">
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}
