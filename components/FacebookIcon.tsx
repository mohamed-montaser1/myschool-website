import { FaFacebook } from "react-icons/fa";

function FacebookIcon() {
  return (
    <>
      <a
        href="https://www.facebook.com/groups/143333401987913"
        className="fixed left-14 bottom-32 z-50 bg-[#0866ff] text-4xl text-white p-3 rounded-full cursor-pointer transition-all ease-in-out hover:scale-110"
        target="_blank"
      >
        <FaFacebook />
      </a>
    </>
  );
}

export { FacebookIcon };
