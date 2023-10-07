import { Link } from "react-router-dom";
import auth from "../../../public/firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
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
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />

            <div className="form-control mt-6">
              <button className="btn bg-green-700 hover:bg-green-600 text-white">
                Login
              </button>
            </div>
          </form>
          <p className="text-red-600 text-center text-xs mb-5">
            Not register before?{" "}
            <Link to="/register"> please register first </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
