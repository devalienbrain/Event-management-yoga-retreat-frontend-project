import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const { signIn, loginGoogle } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    e.target.email.value = "";
    e.target.password.value = "";
    setErrorMessage("");
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast("WOW! You Are Successfuly Logged In");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () =>
    loginGoogle()
      .then((res) => {
        console.log(res.user);
        toast("WOW! You Are Successfuly Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-base-200 p-5">
        <div className="hero-content flex-col">
          <h2 className="text-green-700 text-2xl font-black">Please Login</h2>

          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 px-5 py-9"
            >
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <span
                  onClick={handlePasswordVisibility}
                  className="absolute -ml-7 mt-4"
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-700 hover:bg-green-600 text-white">
                  Login
                </button>
              </div>
            </form>
            {errorMessage && (
              <p className="text-center font-black text-red-500 mb-5 px-4">
                ERROR: {errorMessage}
              </p>
            )}
            <p className="text-purple-900 text-center text-sm mb-5 px-4">
              Not register before?{" "}
              <Link to="/register"> please register first </Link>
            </p>
            <h2 className="text-center text-blue-950">Or,</h2>

            <div className="mx-auto py-5 font-semibold text-center text-white">
              <button
                onClick={handleGoogleLogin}
                className="px-4 py-2 border bg-blue-950 hover:bg-blue-900 font-bold rounded-md flex items-center gap-3"
              >
                <FcGoogle></FcGoogle>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
