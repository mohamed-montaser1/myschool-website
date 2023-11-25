import translate from "@/data/translate.json";
import heroImage from "@/public/hero.svg";
import Image from "next/image";

function Hero() {
  return (
    <section
      className={`flex justify-start items-center container pt-24`}
      style={{ height: `calc(100vh - 125px)` }}
    >
      <div className="mb-44 flex items-center">
        <div className="text-side">
          <h1
            className="text-4xl font-semibold leading-10"
            style={{ lineHeight: 1.5 }}
          >
            {translate["welcome-heading"]}
          </h1>
          <p className="mt-3">{translate["global-private"]}</p>
          <a
            href={`#${translate["link-about"]}`}
            className="btn inline-block bg-[#378B86] hover:bg-[#6c9996] transition-all ease-in-out hover:scale-105"
          >
            {translate["btn-more"]}
          </a>
        </div>
        <Image
          src={heroImage}
          alt="hero image"
          width={700}
          className="max-[1222px]:hidden"
        />
      </div>
    </section>
  );
}

export { Hero };
