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
          <button className="btn bg-[#378B86]">{translate["btn-more"]}</button>
        </div>
        <Image src={heroImage} alt="hero image" width={700} />
      </div>
    </section>
  );
}

export { Hero };
