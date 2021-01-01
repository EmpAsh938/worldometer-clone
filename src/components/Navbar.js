import Logo from "../worldometers-logo.webp";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Worldometer" className="nav__logo" />
      <h1 className="nav__title">Coronavirus</h1>
    </nav>
  );
}
