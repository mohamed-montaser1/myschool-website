import Image, { StaticImageData } from "next/image";

interface Props {
  icon: StaticImageData;
  text: string;
  list: Array<string>;
}

function Card({ icon, text, list }: Props) {
  return (
    <div
      className="card w-1/2 mx-auto max-[356px]:mt-20 max-[356px]:w-[100%]"
      style={{ borderRadius: "40px" }}
    >
      <div className="bg-[#7882b2] w-32 mx-auto aspect-square rounded-full -translate-y-1/2 grid place-items-center">
        <Image src={icon} alt="icon" className="w-20 max-[614px]:w-16" />
      </div>
      <h2 className="text-white text-3xl text-center -translate-y-10">
        {text}
      </h2>
      <ol type="1" className="pb-5 w-full">
        {list.map((el) => (
          <li className="text-center text-white text-xl mb-2">{el}</li>
        ))}
      </ol>
    </div>
  );
}

export { Card };
