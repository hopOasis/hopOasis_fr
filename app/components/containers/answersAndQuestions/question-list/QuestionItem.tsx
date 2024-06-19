import { QuestionButton } from '@/app/components/ui/buttons/buttons';
import React, { useState } from 'react';
import { Question } from './type';
import './questions-list.scss';
type Props = {
  questions: Question[];
};

export const QuestionsList: React.FC<Props> = ({ questions }) => {
  const [ids, setIds] = useState<number[]>([]);

  const onHandleClick = (id: number) => {
    if (ids?.includes(id)) {
      setIds((currentIds) =>
        currentIds.filter((currentId) => currentId !== id),
      );
      return;
    }
    setIds((currentIds) => [...currentIds, id]);
  };

  return (
    <ul className="questions-list">
      {questions.map(({ id, question }) => (
        <li className="questions-list__item" key={id}>
          <div className="questions-list__item-container">
            <p>{`${id}. ${question}`}</p>
            <QuestionButton
              isActive={ids.includes(id)}
              onClick={() => onHandleClick(id)}
            />
          </div>
          <p className={ids.includes(id) ? 'answer--active' : 'answer'}>
            {
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            }
          </p>
        </li>
      ))}
    </ul>
  );
};
