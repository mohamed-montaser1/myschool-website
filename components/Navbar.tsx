import translate from "@/data/translate.json";
import { useState, useEffect } from "react";

type Link = {
  id: number;
  title: string;
  active: boolean;
};

let links: Link[] = [
  { id: 1, title: translate["link-main"], active: true },
  { id: 2, title: translate["link-about"], active: false },
  { id: 3, title: translate["link-structure"], active: false },
  { id: 4, title: translate["link-events"], active: false },
  { id: 5, title: translate["link-news"], active: false },
  { id: 6, title: translate["link-contact"], active: false },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<number>(1);

  const onClickCallback = (newActiveLink: number) => {
    setActiveLink(newActiveLink);
  };

  return (
    <nav className="flex items-center">
      <ul className="flex gap-10">
        {links.map((listEl) => (
          <ListElement
            title={listEl.title}
            onClickCallback={(newActiveLink) => onClickCallback(newActiveLink)}
            active={listEl.id === activeLink}
            id={listEl.id}
            key={listEl.id}
            dropDownItem={listEl.id === 3}
          />
        ))}
      </ul>
    </nav>
  );
};

type ListElementProps = {
  title: string;
  onClickCallback: (newActiveLink: number) => void;
  active: boolean;
  id: number;
  dropDownItem: boolean;
};

const ListElement: React.FC<ListElementProps> = ({
  title,
  onClickCallback,
  active,
  id,
  dropDownItem,
}) => {
  const [showStructureMenu, setShowStructureMenu] = useState<boolean>(false);

  const handleToggleStructureMenu = () => {
    setShowStructureMenu((prev) => !prev);
  };
  const handleActive = () => {
    onClickCallback(id);
  };
  const handleCloseMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    console.log(target.classList);
    if (target.classList.contains("dropdown")) {
      return;
    } else {
      setShowStructureMenu(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleCloseMenu);
  }, []);

  function NormalItem() {
    return (
      <li onClick={handleActive}>
        <a
          href={`#${title}`}
          className={`${active ? "link-active " : ""}nav-link`}
        >
          {title}
        </a>
      </li>
    );
  }

  function goTo(link: string) {
    location.hash = link;
  }

  function DropDownItem() {
    return (
      <>
        <div>
          <li onClick={handleToggleStructureMenu} className="dropdown">
            <a className={`${active ? "link-active " : ""}nav-link dropdown`}>
              {title}
            </a>
          </li>
          <ul
            className={`absolute transition-opacity duration-200 ease-in-out bg-[#bec1c3] text-center p-3 mt-4 text-white flex flex-col gap-2 rounded-lg ml-14 w-44 translate-x-5 ${
              showStructureMenu ? "opacity-1" : "opacity-0"
            }`}
          >
            <li
              className="structure-list-item"
              onClick={() => goTo(`#${title}`)}
            >
              <a href={`#${title}`}>{translate["management"]}</a>
            </li>
            <hr />
            <li
              className="structure-list-item"
              onClick={() => goTo(`#${title}`)}
            >
              <a href={`#${title}`}>{translate["teachers"]}</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
  return <>{dropDownItem ? <DropDownItem /> : <NormalItem />}</>;
};

export { Navbar };
