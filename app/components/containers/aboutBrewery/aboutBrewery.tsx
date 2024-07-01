import Image from "next/image";
import Section from "../../ui/section/section";
import "./aboutBrewery.scss";
import MainLink from "../../ui/links/links";
import img from "./../../../../public/about-section.png";
import { Palitra } from "@/app/types/types";

export default function AboutBrewery() {
  return (
    <Section id="anchor-about">
      <div className="about-section">
        <h2 className="title typography__h2">Про броварню</h2>
        <Image
          src={img}
          height={500}
          width={1280}
          alt={"image of beautiful brewery"}
          placeholder="blur"
        />
        <div className="about-section__text-block typography__h4__regular">
          <p>
            Хмільна оаза - це броварня, яка створена для справжніх поціновувачів
            крафтового пива. У цьому закладі ви знайдете широкий вибір
            унікальних сортів пива, виготовлених з використанням найкращих
            інгредієнтів та за особливими рецептами.
          </p>
          <p>
            Атмосфера Хмільної оази сприяє відпочинку та насолоді пивом, а також
            можливість спробувати нові смаки і відчути справжню майстерність
            пивоварів. Це ідеальне місце для тих, хто цінує якість, смак і
            атмосферу справжньої пивної культури.
          </p>
        </div>
        <MainLink href={"/about"} variant={Palitra.dark}>
          Дізнатися більше
        </MainLink>
      </div>
    </Section>
  );
}
