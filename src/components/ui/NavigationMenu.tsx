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
    <div className="dropdown dropdown-bottom dropdown-end flex justify-end sticky top-0 bg-beige/20 lg:hidden z-10">
      <button className="mx-5 my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block text-error w-8 h-8 stroke-current"
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
        className="dropdown-content menu p-2 grid grid-cols-1 shadow bg-beige rounded-box w-36 h-60 text-navy font-semibold text-lg mt-3 mr-4"
      >
        {links.map((l) => (
          <li className="gap-1" key={l.title}>
            <a href={l.link} className="hover:bg-inherit">
              {l.icon}
              {l.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
