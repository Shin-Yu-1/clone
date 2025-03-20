import { useContext } from "react";
import ThemeToggleSwitch from "@/components/ThemeToggleSwitch";

export default function MainPage() {
  return (
    <>
      <h1>Toggle Theme</h1>
      <div style={{ width: '60px',height: '25px'}}>
        <ThemeToggleSwitch />
      </div>
      
    </>
  );
}