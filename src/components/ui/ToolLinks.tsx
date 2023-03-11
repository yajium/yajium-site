import { ImTwitter } from "react-icons/im/index.js";
import { SiZenn, SiGithub } from "react-icons/si/index.js";
import { IconContext } from "react-icons";

const links = [
  {
    href: "https://twitter.com/yajium_",
    icon: <ImTwitter />,
    isBlank: true,
    color: "#1DA1F2",
    size: 26,
    title: "Twitter",
  },
  {
    href: "https://github.com/yajium",
    icon: <SiGithub />,
    isBlank: true,
    color: "#5EE869",
    size: 26,
    title: "Github",
  },
  {
    href: "https://zenn.dev/rorisutarou",
    icon: <SiZenn />,
    isBlank: true,
    color: "#3EA8FF",
    size: 22,
    title: "Zenn",
  },
];

const ToolLinks = () => {
  return (
    <div className="flex gap-3 sm:gap-14">
      {links.map((item) => (
        <IconContext.Provider
          value={{ color: `${item.color}`, size: `${item.size}px` }}
        >
          {item.isBlank ? (
            <a
              href={item.href}
              target="_blank"
              className="flex gap-2 sm:gap-3 items-end py-3 pr-4 text-gray-500 dark:text-white dark:hover:text-error link hover:text-error"
            >
              {item.icon}
              <p className="self-center">{item.title}</p>
            </a>
          ) : (
            <a href={item.href}>{item.icon}</a>
          )}
        </IconContext.Provider>
      ))}
    </div>
  );
};

export default ToolLinks;
