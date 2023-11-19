import { Link } from "react-router-dom";

function WorkListItem({ src, workName }) {
  return (
    <Link
      to="portfolio"
      className="flex h-64 w-4/5 items-center justify-center rounded-lg border border-sky-500 bg-sky-100 font-baiJum duration-150 hover:scale-[102%] hover:opacity-80 md:w-1/2"
    >
      <h2>
        {workName}
        {src}
      </h2>
    </Link>
  );
}

export default WorkListItem;
