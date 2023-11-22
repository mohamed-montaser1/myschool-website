import { Card } from "./Card";
import { Title } from "./Title";
import translate from "@/data/translate.json";
import bgImage from "@/public/Untitled-1.png";
import Image from "next/image";
import manager from "@/public/manager.png";
import teacher from "@/public/teacher.png";

type Props = {};

const OrganizationStructure: React.FC<Props> = () => {
  return (
    <section className="organization-structure h-screen" id={translate['link-structure']}>
      <Title text={translate["link-structure"]} />
      <div
        className="container gap-3 mb-3 relative flex justify-center items-center"
        style={{
          height: "calc(100vh - 90px)",
        }}
      >
        <Card icon={manager} text={translate["management"]} />
        <Card icon={teacher} text={translate["teachers"]} />

        <Image
          src={bgImage}
          alt="background image"
          className="w-full block opacity-40"
          fill
          style={{ zIndex: -1 }}
        />
      </div>
    </section>
  );
};

export { OrganizationStructure };
