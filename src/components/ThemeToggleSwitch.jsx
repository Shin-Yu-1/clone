import { useThemeToggle } from "@/hooks/useThemeToggle";

const ThemeToggleSwitch = () => {
  const { theme, toggleTheme } = useThemeToggle();
  
  return (
    <button onClick={toggleTheme}>
      현재 테마: {theme}
    </button>
  );
};

export default ThemeToggleSwitch;