import { MdWhatsapp } from "react-icons/md";

function WhatsappButton() {
  return (
    <>
      <a
        href="https://wa.me/+201552882142"
        className="bottom-14 float-btn whatsapp-btn"
        target="_blank"
      >
        <MdWhatsapp />
      </a>
    </>
  );
}

export { WhatsappButton };
