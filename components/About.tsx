import Image from "next/image";
import { Title } from "./Title";
import translate from "@/data/translate.json";
import visionImage from "@/public/vision.jpg";
import goalsImage from "@/public/goals.svg";

function About() {
  return (
    <section className="about" id={translate['link-about']}>
      <Title text={translate["about-title"]} />

      <div className="container">
        <div className="vision-section flex justify-between items-center h-60 mt-32">
          <div className="text">
            <div className="paragraph relative">
              <small className="text-lg">
                {translate["vision-small-text"]}
              </small>
              <h1 className="text-[22px]">{translate["vision"]}</h1>
            </div>
          </div>
          <Image src={visionImage} alt="vision image" width={500} />
        </div>
        <div className="flex justify-between items-center">
          <Image src={goalsImage} alt="vision image" width={500} />
          <div className="text">
            <div className="paragraph relative">
              <small className="text-lg">
                {translate["goal-small-text"]}
              </small>
              <h1 className="text-[22px]">{translate["goal"]}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
