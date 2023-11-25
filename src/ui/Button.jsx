import { useNavigate } from "react-router-dom";

function Button({ type, to, onClick, children }) {
  const navigate = useNavigate();

  if (type === "Image")
    return <button onClick={() => navigate(to)}>{children}</button>;

  if (type === "Link")
    return (
      <button
        onClick={() => navigate(to)}
        className="rounded-lg bg-sky-500 px-4 py-1 text-white shadow-lg duration-150 hover:scale-105"
      >
        {children}
      </button>
    );

  return (
    // case type === "" / regular
    <button
      onClick={() => onClick()}
      className="rounded-lg bg-sky-500 px-4 py-1 text-white shadow-lg duration-150 hover:scale-105"
    >
      {children}
    </button>
  );
}

export default Button;
