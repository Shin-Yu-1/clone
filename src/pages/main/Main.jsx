import ThemeToggleSwitch from "@/components/ThemeToggleSwitch";
import List from "@/components/List";
import Add from "@/components/Add";

export default function MainPage() {
  return (
    <>
      <h1>Toggle Theme</h1>
      <div style={{ width: '60px',height: '25px'}}>
        <ThemeToggleSwitch />
      </div>
      <Add />
      <List />
      
    </>
  );
}