import logo from "../../../public/Resources/logo.png";

const Header = () => {
   return (
     <div className="bg-purple-200">
       {" "}
       <img className="mx-auto" src={logo} alt="" />{" "}
     </div>
   );
};

export default Header;
