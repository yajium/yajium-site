import {
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GiftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "About",
    link: "/about",
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4" />,
  },
  {
    title: "Works",
    link: "/works",
    icon: <GiftIcon className="h-4 w-4" />,
  },
  {
    title: "Blog",
    link: "/blog",
    icon: <PencilSquareIcon className="h-4 w-4" />,
  },
];

const NavigationMenu = () => {
  return (
    <nav className="dropdown dropdown-bottom dropdown-end flex justify-end bg-navy/30 sticky top-0 sm:hidden z-10">
      <button type="button" className="mx-5 mt-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block text-beige w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-1 grid grid-cols-4 shadow bg-beige w-30 h-50 text-navy font-semibold text-base"
      >
        {links.map((l) => (
          <li className="gap-0 py-4" key={l.title}>
            <a href={l.link} className="hover:bg-inherit pl-3">
              {l.icon}
              {l.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
