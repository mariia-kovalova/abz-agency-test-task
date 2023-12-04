import { Logo } from 'src/components/Logo';
import { NavBar } from '../NavBar';

export const Header = () => (
  <header className="bg-white py-[13px]">
    <div className="wrapper">
      <nav className="flex items-center justify-between gap-1">
        <Logo />
        <NavBar />
      </nav>
    </div>
  </header>
);
