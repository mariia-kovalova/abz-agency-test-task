import { home } from 'src/data/links.ts';
import data from 'src/data/header.json';
import logo from 'src/images/logo.png';

const { aria, alt } = data.logo;

export const Logo = () => (
  <a href={home} aria-label={aria}>
    <img src={logo} alt={alt} width="104" height="26" />
  </a>
);
