import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

// ({onCreate})로 안받고 context로 받기
const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const { onCreate } = useContext(TodoDispatchContext);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="New Todo.."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
