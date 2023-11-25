import Button from "./Button";

function WorkCard({ src, altName, workLink }) {
  if (workLink)
    return (
      <Button type="Image" to={workLink}>
        <img
          className="flex items-center justify-center rounded-lg border border-sky-500 bg-sky-100 duration-150 hover:scale-[101%] hover:opacity-80"
          src={src}
          alt={altName}
        />
      </Button>
    );

  return (
    <img
      className="flex items-center justify-center rounded-lg border border-sky-500 bg-sky-100 duration-150 hover:scale-[101%] hover:opacity-80"
      src={src}
      alt={altName}
    />
  );
}

export default WorkCard;
