import Image, { StaticImageData } from "next/image";
import newsCardImage from "@/public/news-card.jpg";

export interface TNew {
  img: StaticImageData;
  title: string;
  p: string;
}

function NewsCard({ img, p, title }: TNew) {
  return (
    <div className="p-2 bg-[var(--logo-color)] min-h-fit rounded-lg">
      <div className="h-72 w-full relative">
        <Image
          src={img}
          alt="news card image"
          className="rounded-lg object-cover"
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
