import { Card } from "./Card";
import { Title } from "./Title";
import translate from "@/data/translate.json";
import bgImage from "@/public/Untitled-1.png";
import Image from "next/image";
import manager from "@/public/manager.png";
import teacher from "@/public/teacher.png";

type Props = {};

const teachers_list: Array<string> = [
  translate["teacher-1"],
  translate["teacher-2"],
  translate["teacher-3"],
  translate["teacher-4"],
  translate["teacher-5"],
  translate["teacher-6"],
  translate["teacher-7"],
  translate["teacher-8"],
];

const managers_list: Array<string> = [
  translate["manager-1"],
  translate["manager-2"],
  translate["manager-3"],
];

const OrganizationStructure: React.FC<Props> = () => {
  return (
    <section
      className="organization-structure min-h-screen h-fit mt-32 relative max-[356px]:mb-32"
      id={translate["link-structure"]}
    >
      <Title
        text={translate["link-structure"]}
        style={{ marginBottom: "77px" }}
      />
      <div className="container gap-3 mb-3 relative flex justify-center max-[678px]:flex-col mt-[127px] min-h-[550px]">
        <Card
          icon={manager}
          text={translate["management"]}
          list={managers_list}
        />
        <Card
          icon={teacher}
          text={translate["teachers"]}
          list={teachers_list}
        />
      </div>
      <Image
        src={bgImage}
        alt="background image"
        className="w-full block opacity-40 object-cover"
        fill
        style={{ zIndex: -1 }}
      />
    </section>
  );
};

export { OrganizationStructure };
