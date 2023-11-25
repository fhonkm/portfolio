import Button from "../ui/Button";

function PageNotFound() {
  return (
    <div className="flex h-screen max-w-6xl flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-sky-100 p-12 shadow-lg">
        <h1 className="">Page not found, sorry 😢</h1>
        <Button
          type="Link"
          to="/"
          className="rounded-lg bg-sky-500 px-4 py-1 text-white shadow-lg duration-150 hover:scale-105"
        >
          Go back
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
