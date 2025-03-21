import { useState } from "react";
import { useDispatch } from "react-redux";

import { todoAdded } from '@/store/todo';

import Input from "@/components/elements/Input";
import Button from "@/components/elements/Button";

const Add = ({ showToast }) => {
  const [text, setText] = useState("");
  const [inputVisible, setInputVisible] = useState(false); 
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(todoAdded({ text }));
      setText("");
      setInputVisible(false);
      showToast?.("할 일이 추가되었습니다", "success");
    }
  };

  return (
    <>
      {!inputVisible ? (
        <Button onClick={() => setInputVisible(true)}>ADD</Button>
      ) : (
        <>
          <Input
            label=""
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your todo"
            error={text.length < 1 ? "Todo must be at least 1 characters" : ""}
            onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
          />
          <Button onClick={handleAddTodo}>SAVE</Button>
        </>
      )}
    </>
  )
};

export default Add;