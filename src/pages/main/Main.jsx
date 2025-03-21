import ThemeToggleSwitch from "@/components/ThemeToggleSwitch";
import List from "@/components/List";
import Add from "@/components/Add";
import Toast from "@/components/common/toast/toast";
import useToast from "@/hooks/useToast";

export default function MainPage() {
  const { message, type, show, showToast } = useToast({ autoClose: true, duration: 3000 });

  return (
    <>
      <div style={{ width: '60px',height: '25px'}}>
        <ThemeToggleSwitch />
      </div>
      <Add showToast={showToast} />
      <List />
      <Toast message={message} type={type} show={show} />
    </>
  );
}