import Address from '@/app/components/containers/footer/components/Address';
import GoogleMaps from '@/app/components/ui/GoogleMaps/GoogleMaps';
import Section from '@/app/components/ui/section/section';

export default function ShopsSection() {
  return (
    <Section>
      <h2 className="title typography__h2">Наші магазини</h2>
      <div className="about-page__flex">
        <div className="about-page__left-block">
          <p>
            Магазини крафтової пивоварні "Хмільна Оаза" - це унікальні заклади
            для справжніх цінителів пива. Тут ви знайдете широкий вибір
            авторських сортів пива, виготовлених з використанням найкращих
            інгредієнтів і за сучасними рецептами. У магазинах "Хмільна Оаза"
            завжди панує атмосфера радості та гостинності, а дружній персонал
            завжди готовий порадити вам і підібрати ідеальний сорт пива за вашим
            смаком. Завітайте до магазинів "Хмільна Оаза" і насолоджуйтесь
            смаком найкращого крафтового пива!
          </p>
          {/* <h2 className="title typography__h2">Де нас знайти</h2>
          <Address /> */}
        </div>
        <div className="about-page__right-block">
          <GoogleMaps width={586} />
        </div>
      </div>
    </Section>
  );
}
