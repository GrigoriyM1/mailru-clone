import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="bg-white">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;