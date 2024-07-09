import "./delivery-text.scss";

export default function DeliveryText() {
  return (
    <section className="delivery-text">
      <p>
        <span>Доставка </span>по Україні здійснюється Новою Поштою за вашим
        бажанням: у відділення, курʼєром або у поштомат.
      </p>
      <ul>
        <li>
          <span>Відвантажуємо Пн-Пт</span>
        </li>
        <li>Замовлення прийняті до 14:00 відправляємо в той самий день</li>
        <li>Терміни доставки 1-3 робочих дні</li>
        <li>Пакуємо замовлення в коробки на 6 та 12 пляшок</li>
        <li>Вартість доставки залежить від тарифів Нової Пошти</li>
        <li>Ви можете врахувати вартість доставки у вартість замовлення.</li>
      </ul>

      <p>
        <span>Оплата</span>
      </p>
      <ul>
        <li>безготівкова оплата через платіжну систему MONO</li>
        <li>
          оплата карткою Visa/Mastercard при оформленні замовлення (без комісії)
          + вартість послуг «Нової Пошти» при отриманні товару.
        </li>
        <li>
          Послуги «Нової Пошти» оплачуються лише безпосередньо при отриманні
          товару у відділенні.
        </li>
      </ul>

      <p>
        <span>Повернення</span>
      </p>
      <p>
        Покупець має право відмовитися від отриманого товару неналежної якості
        після його огляду в момент приймання товару. В разі відмови від товару
        неналежної якості, вартість якого була сплачена покупцем шляхом
        безготівкового розрахунку, продавець повертає кошти покупцеві за товар
        неналежної якості протягом 3-х банківських днів.
      </p>
    </section>
  );
}
