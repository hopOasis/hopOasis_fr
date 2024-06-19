import { QuestionButton } from "@/app/components/ui/buttons/buttons";
import React, { useState } from "react";
import "./questions-list.scss";
import { questions } from "@/app/static/ansert-and-questions";

const Accordion = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      key={id}
      className="questions-list__item"
      onToggle={(e) => setIsOpen(e.target.open)}
    >
      <summary className="questions-list__item-container">
        {`${id}. ${question}`}
      </summary>
      <p className={isOpen ? "animation" : undefined}>{answer}</p>
    </details>
  );
};

export const QuestionsList = () => {
  return (
    <div className="questions-list">
      {questions.map((props) => (
        <Accordion {...props} />
      ))}
    </div>
  );
};
