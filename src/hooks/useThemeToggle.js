import { useContext } from "react";
import { ThemeContext } from "@/store/ThemeContext";

export const useThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
};