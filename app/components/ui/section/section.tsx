import { IProps } from "./types";

export default function Section({ children, id }: IProps) {
  return (
    <section className="section" id={id}>
      <div className="container">{children}</div>
    </section>
  );
}
