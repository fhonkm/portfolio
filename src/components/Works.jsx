import Border from "../ui/Border";
import WorkListItem from "./WorkListItem";
import { workList } from "../workList";

function Works() {
  return (
    <section id="works">
      <h2 className="mx-auto mb-6 max-w-6xl px-10 text-center font-baiJum text-2xl md:text-left">
        Recent Works
      </h2>
      <div className="mx-auto max-w-6xl">
        <div className="mx-6 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {workList.map((work) => {
            return (
              <WorkListItem
                src={work.imgSrc}
                workName={work.workName}
                key={work.workId}
              />
            );
          })}
        </div>
      </div>
      <Border />
    </section>
  );
}

export default Works;
