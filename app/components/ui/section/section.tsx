import { IProps } from "./types";

export default function Section({ children }: IProps) {
  return (
    <section className="section">
      <div className="container">{children}</div>
    </section>
  );
}
