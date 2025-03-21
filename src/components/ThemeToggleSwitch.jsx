import { useContext } from 'react';

import ToggleSwitch from '@/components/elements/ToggleSwitch';
import { ThemeContext } from '@/store/ThemeContext';

const ThemeToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ToggleSwitch checked={theme !== 'light'} onChange={handleToggle} />
    </>
  );
};

export default ThemeToggleSwitch;
