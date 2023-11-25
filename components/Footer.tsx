import Logo from "@/public/logo.png";
import Image from "next/image";
import translate from "@/data/translate.json";
import { MdWhatsapp } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex items-center py-5 bg-[var(--logo-color)] flex-col px-1">
      <Image src={Logo} alt="logo image" width={100} height={100} />
      <h2 className="text-white text-2xl mb-2">{translate["website-title"]}</h2>
      <p className="text-white">{translate["vision"]}</p>
      <div className="flex gap-5 my-3">
        <a
          href="https://www.facebook.com/groups/143333401987913"
          className="footer-btn"
          target="_blank"
        >
          <span>{translate["footer-facebook"]}</span>
          <span className="text-xl">
            <FaFacebook />
          </span>
        </a>
        <a
          href="https://wa.me/+201552882142"
          className="footer-btn"
          target="_blank"
        >
          <span>{translate["footer-whatsapp"]}</span>
          <span className="text-xl">
            <MdWhatsapp />
          </span>
        </a>
      </div>
      <h3 className="text-white font-bold mt-3">{translate["copy-right"]}</h3>
    </footer>
  );
}

export { Footer };
