import AnswerDeliveryText from "./components/AnswerDeliveryText";
import { AnswerForom } from "./components/AnswerForm";
import AnswerPaymentText from "./components/AnswerPaymentText";
import Loacations from "./components/Loacations";

export const questions = [
  {
    id: 1,
    question: "Які види пива ви пропонуєте?",
    answer: (
      <p>
        У нашому магазині ви можете знайти деклька видів світлого та темного
        пива а також різні варіанти сидрів
      </p>
    ),
  },
  {
    id: 2,
    question: "Як відбувається доставка пива?",
    answer: <AnswerDeliveryText />,
  },
  {
    id: 3,
    question: "Чи можу я повернути чи обміняти пиво?",
    answer: (
      <p>
        Покупець має право відмовитися від отриманого товару неналежної якості
        після його огляду в момент приймання товару. В разі відмови від товару
        неналежної якості, вартість якого була сплачена покупцем шляхом
        безготівкового розрахунку, продавець повертає кошти покупцеві за товар
        неналежної якості протягом 3-х банківських днів.
      </p>
    ),
  },
  {
    id: 4,
    question: "Які способи оплати ви приймаєте?",
    answer: <AnswerPaymentText />,
  },
  {
    id: 5,
    question: "Де нас знайти?",
    answer: <Loacations />,
  },

  {
    id: 6,
    question:
      "Залишились питання? Наш менеджер з радістю дасть на них відповідь",
    answer: <AnswerForom />,
  },
];
