import { Navbar } from "../navbar";

const Header = () => {
  return (
    <header className="relative z-50">
      <div className="absolute">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
