import { ButtonLink } from 'src/components/ButtonLink';
import data from 'src/data/hero.json';
import { sign_up_section } from 'src/data/links';

import './hero.scss';

const { title, text, btn_text } = data;

export const HeroSection = () => (
  <section className="hero pb-[71px] pt-10 md:pb-[88px] md:pt-[89px] xl:pb-[163px] xl:pt-[164px]">
    <div className="wrapper">
      <div className="mx-auto max-w-[380px]">
        <h1 className="heading text-white">{title}</h1>
        <p className="mt-[21px] text-center text-white">{text}</p>
      </div>

      <ButtonLink
        className="mx-auto mt-8"
        href={sign_up_section}
        text={btn_text}
      />
    </div>
  </section>
);
