
export const fields = [
  {
    id: "firstName",
    type: "text",
    placeholder: "Ім'я",
    validation: (value: string) => {
      return value.length >= 3;
    },
  },
  {
    id: "lastName",
    type: "text",
    placeholder: "Призвище",
    validation: (value: string) => {
      return value.length >= 3;
    },
  },
  {
    id: "phone",
    type: "tel",
    placeholder: "Номер телефону",
    validation: (value: string) => {
      const regex = /^\+380\d{9}$/;
      return regex.test(value);
    },
  },
  {
    id: "email",
    type: "email",
    placeholder: "Email",
    validation: (value: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(value);
    },
  },
  {
    id: "password",
    type: "password",
    placeholder: "Введіть свій пароль",
    validation: (value: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(value);
    },
  },
];

export const deliveryRadio = [
  {
    id: "department",
    name: "delivery",
    placeholder: "Нова пошта (відділення)",
  },
  {
    id: "parcel-station",
    name: "delivery",
    placeholder: "Нова пошта (поштомат)",
  },
  {
    id: "courier",
    name: "delivery",
    placeholder: "Нова пошта (кур'єр)",
  },
];
export const paymentRadio = [
  {
    id: "cash",
    name: "payment",
    placeholder: "Оплата при отриманні замовлення",
  },
  {
    id: "LiqPay",
    name: "payment",
    placeholder: "Карта Visa і MasterCard (LiqPay)",
  },
  {
    id: "NovaPay",
    name: "payment",
    placeholder: "Карта Visa і MasterCard (NovaPay)",
  },
];

