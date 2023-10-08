import { FcPhone } from "react-icons/fc";
const FreeCounselling = () => {
  return (
    <div className="w-2/3 md:w-1/2 mx-auto bg-purple-50">
      <div className="flex flex-col gap-11 min-h-screen justify-center items-center bg-purple-100 text-center p-5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-red-900 p-2">
          Tips & Tricks
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold p-2">
          Get Free Counselling From Specialist
        </h1>
        <div className="mx-auto py-5 font-semibold text-center text-white">
          <button className="px-4 py-2 border bg-blue-950 hover:bg-blue-900 font-bold rounded-md flex items-center gap-3">
            <FcPhone></FcPhone> +88 0 1893 671184
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeCounselling;
