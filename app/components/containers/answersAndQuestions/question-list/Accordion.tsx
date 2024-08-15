import Icons from "@/app/components/ui/icons/icons";
import { IProps } from "./types";

export const Accordion = ({ id, question, answer }: IProps) => {
  return (
    <details key={id} className="questions-list__item">
      <summary className="questions-list__item-container typography__h3">
        {`${id}. ${question}`}
        <Icons name="chevronDown" />
      </summary>
      <div>{answer}</div>
    </details>
  );
};
