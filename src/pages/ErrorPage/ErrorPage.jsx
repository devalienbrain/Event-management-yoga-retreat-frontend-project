import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-11 min-h-screen justify-center items-center bg-red-100">
      <h2 className="text-4xl font-black text-red-700">Oops.. </h2>
      <h1 className="text-5xl font-bold">Page Not Found !!!</h1>
      <Link
        to={"/"}
        className="px-5 py-2 bg-red-600 text-white text-sm font-semibold hover:bg-red-500 drop-shadow-2xl"
      >
        Click To Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
