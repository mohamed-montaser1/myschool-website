import { NewsCard, TNew } from "./NewsCard";
import img1 from "@/public/news-1.jpeg";
import img2 from "@/public/news-2.jpeg";
import img3 from "@/public/news-3.jpeg";
import img4 from "@/public/news-4.jpeg";
import img5 from "@/public/news-5.jpeg";
import img6 from "@/public/news-6.jpeg";
import translate from "@/data/translate.json";
import { Title } from "./Title";

const data: Array<TNew> = [
  {
    img: img1,
    title: translate["news-card-title"],
    p: translate["news-card-p"],

    contain: false,
  },
  {
    img: img2,
    title: translate["news-card-title"],
    p: translate["news-card-p"],
    contain: false,
  },
  {
    img: img3,
    title: translate["news-card-title"],
    p: translate["news-card-p"],
    contain: false,
  },
  {
    img: img4,
    title: translate["news-card-title"],
    p: translate["news-mazen"],
    contain: false,
  },
  {
    img: img5,
    title: translate["news-card-title"],
    p: translate["news-mohamed-quran"],
    contain: true,
  },
  {
    img: img6,
    title: translate["news-card-title"],
    p: translate["news-ahmed"],
    contain: true,
  },
];

function News() {
  return (
    <section className="mt-12">
      <Title text={translate["link-events"]} />
      <div className="container grid gap-3 n-container">
        {data.map((card) => (
          <NewsCard
            img={card.img}
            title={card.title}
            p={card.p}
            contain={card.contain}
            key={Math.random() * 1000 + 20}
          />
        ))}
      </div>
    </section>
  );
}

export { News };
