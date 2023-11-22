import Image, { StaticImageData } from "next/image";

interface Props {
  icon: StaticImageData;
  text: string;
}

function Card({ icon, text }: Props) {
  return (
    <div className="card w-1/3 mx-auto" style={{ borderRadius: "40px" }}>
      <div className="bg-[#7882b2] w-40 mx-auto aspect-square rounded-full -translate-y-1/2 grid place-items-center">
        <Image src={icon} alt="icon" className="w-28" />
      </div>
      <h2 className="text-white text-3xl text-center -translate-y-10">{text}</h2>
    </div>
  );
}

export { Card };
