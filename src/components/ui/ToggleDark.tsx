import React, { useEffect, useState } from "react";

const ToggleDark = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.querySelector("html")?.classList.add("dark");
    } else {
      setDarkMode(false);
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  const handleChangeDarkMode = () => {
    if (darkMode) {
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <div className="mt-4 sm:mt-9 flex justify-end mx-6 sm:mx-10">
      <input
        type="checkbox"
        className="toggle toggle-error toggle-sm sm:toggle-md"
        onClick={handleChangeDarkMode}
        checked={darkMode}
      />
    </div>
  );
};

export default ToggleDark;
