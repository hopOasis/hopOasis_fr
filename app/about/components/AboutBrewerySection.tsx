import Section from "@/app/components/ui/section/section";
import Image from "next/image";

export default function AboutBrewerySection() {
  return (
    <Section>
      <h2 className="title typography__h2">Про броварню</h2>
      <div className="about-page__flex">
        <p className="about-page__left-block">
          Броварня "Хмільна Оаза" - це молода та перспективна команда
          ентузіастів, яка зосереджена на виробництві високоякісного
          різноманітного пива. Їхні сорти пива відрізняються оригінальними
          рецептами та неповторним смаком, що привертає увагу поціновувачів
          пива. Броварня активно бере участь у пивних фестивалях та подіях, де
          демонструє свою продукцію та здобуває нових шанувальників. Така
          команда завжди працює над вдосконаленням своїх рецептів та дбає про
          якість кожного ковтка пива, щоб задовольнити смаки своїх клієнтів.
        </p>
        <div className="about-page__right-block dark">
          <Image
            src="/logo_light.svg"
            width={492.35}
            height={150.23}
            alt="logo"
          />
        </div>
      </div>
    </Section>
  );
}
