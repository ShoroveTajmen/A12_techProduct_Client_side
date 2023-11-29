import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className=" w-[500px] h-[300px] mx-auto mt-[300px]  text-center bg-[#0A2647] text-white p-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-4xl mt-4 mb-4 font-bold">Page not found!</p>
        <p className="font-semibold mb-4">The page you are looking for no longer exists. Perhaps you can return back to the site’s homepage.</p>
        <Link to="/"><button className="btn bg-[#4361ee] border-none text-white">BACK HOME</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
