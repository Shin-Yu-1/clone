import { useContext } from "react";
import { ThemeContext } from "@/store/ThemeContext";
import ToggleSwitch from "@/components/elements/ToggleSwitch";

const ThemeToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme(theme === "light" ? "dark" : "light"); 
  };

  return (
    <>
      <ToggleSwitch
        checked={theme !== "light"}
        onChange={handleToggle}
      />
    </>
  );
};

export default ThemeToggleSwitch;