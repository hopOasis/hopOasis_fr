import { Accordion } from "./Accordion";
import "./questions-list.scss";
import { questions } from "@/app/static/ansert-and-questions";



export const QuestionsList = () => {
  return (
    <div className="questions-list">
      {questions.map((props) => (
        <Accordion {...props} />
      ))}
    </div>
  );
};
