import { home } from "src/data/links.ts";
import data from "src/data/header.json";

const { aria, img } = data.logo;
const { src, alt } = img;

export const Logo = () => (
  <a href={home} aria-label={aria}>
    <img src={src} alt={alt} width="104" height="26" />
  </a>
);
