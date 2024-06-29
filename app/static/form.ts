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
];
