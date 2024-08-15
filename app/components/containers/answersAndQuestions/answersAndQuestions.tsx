import Section from "../../ui/section/section";
import "./answersAndQuestions.scss";
import { QuestionsList } from "./question-list/QuestionItem";

export default function AnswersAndQuestions() {
  return (
    <Section>
      <div className="answers-and-questions">
        <h2 className="title typography__h2">Поширені питання</h2>
        <QuestionsList />
      </div>
    </Section>
  );
}
