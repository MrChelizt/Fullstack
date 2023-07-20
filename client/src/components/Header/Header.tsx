import NavBar from "./NavBar";

import Logo from "../../assets/logo-no-background.png";

export default function Header() {
  return (
    <div>
      <img src={Logo} alt="MrChelizt" height={80} />
      <NavBar />
    </div>
  );
}
