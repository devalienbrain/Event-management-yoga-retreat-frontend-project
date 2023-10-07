import logo from "../../../public/Resources/logo.png";

const Header = () => {
  return (
    <div className="bg-purple-300">
      {" "}
      <img className="mx-auto w-48" src={logo} alt="" />{" "}
    </div>
  );
};

export default Header;
