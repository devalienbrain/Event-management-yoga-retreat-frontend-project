import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-11 min-h-screen justify-center items-center bg-purple-300">
      <h2 className="text-4xl font-black text-red-700">Oops.. </h2>
      <h1 className="text-5xl font-bold">Page Not Found !!!</h1>
      <Link
        to={"/"}
        className="px-5 py-2 bg-purple-500 text-white text-sm font-bold hover:bg-red-500 rounded"
      >
        Click to go home
      </Link>
    </div>
  );
};

export default ErrorPage;
