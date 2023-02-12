import { SlSocialTwitter } from "react-icons/sl";
import { SiZenn } from "react-icons/si";
import { RiGithubLine } from "react-icons/ri";
import { TbMoodNeutral } from "react-icons/tb";
import { IconContext } from "react-icons";

const links = [
  {
    href: "/",
    icon: <TbMoodNeutral />,
    isBlank: false,
  },
  {
    href: "https://twitter.com/yajium_",
    icon: <SlSocialTwitter />,
    isBlank: true,
  },
  {
    href: "https://zenn.dev/rorisutarou",
    icon: <SiZenn />,
    isBlank: true,
  },
  {
    href: "https://github.com/yajium",
    icon: <RiGithubLine />,
    isBlank: true,
  },
];

const ToolLinks = () => {
  return (
    <div className="flex justify-around">
      {links.map((item) => (
        <IconContext.Provider value={{ color: "#f5faff", size: "33px" }}>
          {item.isBlank ? (
            <a rel="twitter" href="https://twitter.com/yajium_" target="_blank">
              {item.icon}
            </a>
          ) : (
            <a rel="twitter" href="https://twitter.com/yajium_">
              {item.icon}
            </a>
          )}
        </IconContext.Provider>
      ))}
    </div>
  );
};

export default ToolLinks;
