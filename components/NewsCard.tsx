import Image, { StaticImageData } from "next/image";
import newsCardImage from "@/public/news-card.jpg";

export interface TNew {
  img: StaticImageData;
  title: string;
  p: string;
  contain?: boolean;
}

function NewsCard({ img, p, title, contain }: TNew) {
  return (
    <div className="p-2 bg-[var(--logo-color)] min-h-fit rounded-lg w-[100%]">
      <div className="h-72 w-full relative overflow-hidden">
        <Image
          src={img}
          alt="news card image"
          className={`rounded-lg ${
            contain
              ? "object-contain"
              : "object-cover hover:scale-125 hover:rotate-6 transition-all ease-in-out duration-200"
          }`}
          fill
        />
      </div>
      <div className="text">
        <h3 className="text-center text-white text-2xl my-3">{title}</h3>
        <p className="text-center text-white mb-6">{p}</p>
      </div>
    </div>
  );
}

export { NewsCard };
