import Section from "@/app/components/ui/section/section";
import Image from "next/image";

export default function ProductionProccesSection() {
  return (
    <Section>
      <h2 className="title typography__h2">Процес виробництва пива</h2>
      <div className="about-page__flex">
        <div className="about-page__left-block">
          <Image
            src="/production-process.jpg"
            width={586}
            height={600}
            alt="production process"
          />
        </div>
        <div className="about-page__right-block">
          <ul className="production-procces-list">
            <li>
              Збір і підготовка сировини: Ячмінь мочать, сушать та калібрують.
              Хміль розсипають та розмелюють. Вода піддається очищенню та
              фільтрації.
            </li>
            <li>
              Збереження сировини: Після підготовки сировину зберігають у
              відповідних умовах для збереження якості.
            </li>
            <li>
              Варіння сусла: Сировину сумішують у воді та підвищують температуру
              для видобуття цукрів.
            </li>
            <li>
              Додавання хмелю: Додають хміль для надання пиву гіркоти, аромату
              та консервації.
            </li>
            <li>
              Фільтрування: Сусло фільтрують для видалення залишків сировини.
            </li>
            <li>
              Бродіння: Додають дріжджі для бродіння цукрів у алкоголь та
              вуглекислоту.
            </li>
            <li>
              Дозрівання: Після бродіння пиво дозріває для покращення смакових
              якостей.
            </li>

            <li>
              Розлив: Готове пиво розливають у пляшки, банки або бочки для
              подальшого розподілу.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
