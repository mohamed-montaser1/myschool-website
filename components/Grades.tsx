import { GradesCard } from "./GradesCard";
import { Title } from "./Title";
import translate from "@/data/translate.json";

function Grades() {
  return (
    <section className="grades my-10">
      <Title text={translate["grades"]} />.
      <div className="container">
        <div className="grid grid-cols-3 gap-3 n-container flex-wrap mx-auto max-[810px]:grid-cols-2">
          <GradesCard grade={translate["grade-1"]} />
          <GradesCard grade={translate["grade-2"]} />
          <GradesCard grade={translate["grade-3"]} />
        </div>
      </div>
    </section>
  );
}

export { Grades };
