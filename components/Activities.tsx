import { NewsCard, TNew } from "./NewsCard";
import img1 from "@/public/art-1.jpeg";
import img2 from "@/public/art-2.jpeg";
import img3 from "@/public/art-3.jpeg";
import img4 from "@/public/art-4.jpeg";
import img5 from "@/public/art-5.jpeg";
import img6 from "@/public/art-6.jpeg";
import translate from "@/data/translate.json";
import { Title } from "./Title";

const data: Array<TNew> = [
  {
    img: img1,
    title: translate["activities-card-title"],
    p: translate["activities-card-p"],
  },
  {
    img: img2,
    title: translate["activities-card-title"],
    p: translate["activities-card-p"],
  },
  {
    img: img3,
    title: translate["activities-card-title"],
    p: translate["activities-card-p"],
  },
  {
    img: img4,
    title: translate["green-card-title"],
    p: translate["green-card-p"],
  },
  {
    img: img5,
    title: translate["green-card-title"],
    p: translate["green-card-p"],
  },
  {
    img: img6,
    title: translate["green-card-title"],
    p: translate["green-card-p"],
  },
];

function Activities() {
  return (
    <section className="mt-12">
      <Title text={translate["activities"]} />
      <div className="container grid gap-3 n-container">
        {data.map((card) => (
          <NewsCard
            img={card.img}
            title={card.title}
            p={card.p}
            key={Math.random() * 1000 + 20}
          />
        ))}
      </div>
    </section>
  );
}

export { Activities };
