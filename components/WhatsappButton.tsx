import { MdWhatsapp } from "react-icons/md";

function WhatsappButton() {
  return (
    <>
      <a
        href="https://wa.me/+201552882142"
        className="fixed left-14 bottom-14 z-50 bg-[#25d366] text-4xl text-white p-3 rounded-full cursor-pointer transition-all ease-in-out hover:scale-110"
        target="_blank"
      >
        <MdWhatsapp />
      </a>
    </>
  );
}

export { WhatsappButton };
