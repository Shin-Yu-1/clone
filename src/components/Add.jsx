import { useState } from "react";
import { useDispatch } from "react-redux";

import { todoAdded } from '@/store/todo';

import Input from "@/components/elements/Input";
import Button from "@/components/elements/Button";

const Add = () => {
  const [text, setText] = useState("");
  const [inputVisible, setInputVisible] = useState(false); 
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(todoAdded({ text }));
      setText("");
      setInputVisible(false)
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