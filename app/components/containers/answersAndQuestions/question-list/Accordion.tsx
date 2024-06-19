import Icons from "@/app/components/ui/icons/icons";
import { IProps } from "./types";

export const Accordion = ({ id, question, answer }: IProps) => {
  return (
    <details
      key={id}
      className="questions-list__item"
    >
      <summary className="questions-list__item-container">
        {`${id}. ${question}`}
        <Icons name="chevronDown" stroke="#131313" />
      </summary>
      <p >{answer}</p>
    </details>
  );
};
