import { questions } from "@/app/static/ansert-and-questions";
import { Accordion } from "./Accordion";
import "./questions-list.scss";

export const QuestionsList = () => {
  return (
    <div className="questions-list">
      {questions.map((props) => (
        <Accordion {...props} key={props.id} />
      ))}
    </div>
  );
};
