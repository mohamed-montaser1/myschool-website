import logo from "@/public/logo.png";
import Image from "next/image";

type Props = {
  width: number;
  height: number;
};

const Logo: React.FC<Props> = ({ height, width }) => {
  return <Image src={logo} alt="school logo" height={height} width={width} />;
};

export default Logo;
