import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen max-w-6xl font-baiJum ">
      <div className="flex flex-col justify-center items-center bg-sky-100 p-12 rounded-xl shadow-lg space-y-4">
        <h1 className="">Page not found, sorry 😢</h1>
        <button
          onClick={() => handleGoBack()}
          className="bg-sky-500 text-white px-4 py-1 rounded-lg shadow-lg hover:scale-105 duration-150"
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
