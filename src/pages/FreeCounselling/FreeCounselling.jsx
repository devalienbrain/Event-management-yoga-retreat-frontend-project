import { FcPhone } from "react-icons/fc";
const FreeCounselling = () => {
  return (
    <div className="flex flex-col gap-11 min-h-screen justify-center items-center bg-red-50">
      <h2 className="text-4xl font-black text-red-900">Tips & Tricks</h2>
      <h1 className="text-5xl font-bold">Get Free Counselling Here..</h1>
      <div className="mx-auto py-5 font-semibold text-center text-white">
        <button className="px-4 py-2 border bg-blue-950 hover:bg-blue-900 font-bold rounded-md flex items-center gap-3">
          <FcPhone></FcPhone> + 88 0 1 893 67 11 84
        </button>
      </div>
    </div>
  );
};

export default FreeCounselling;
