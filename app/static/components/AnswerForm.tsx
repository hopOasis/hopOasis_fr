'use client';
import Field from '@/app/components/ui/Field/Field';
import { useState } from 'react';
import { fields } from '../form';
import './styles.scss';
import Contacts from '@/app/components/containers/footer/components/Contacts';

export const AnswerForom = () => {
  const [values, setValues] = useState({ firstName: '', phone: '' });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="answer-form" onSubmit={onSubmit}>
      <div>
        {[fields[0], fields[2]].map((props) => (
          <Field
            key={props.id}
            {...props}
            //@ts-ignore
            onChange={({ id, value }) => setValues({ ...values, [id]: value })}
          />
        ))}
        <button className="main-link dark" type="submit">
          Замовити дзвінок
        </button>
      </div>
      <Contacts />
    </form>
  );
};
