import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onDeleteTodo = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        type="checkbox"
        checked={isDone}
      />
      <div className="content">{content}</div>
      <div className="date">{date}</div>
      <button onClick={onDeleteTodo}> 삭제</button>
    </div>
  );
};

//고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps) => {
  //true => props 바뀌지 않음 (리렌더링X)
  //false => props 바뀜 (리렌더링O)

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
