import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function App() {
  const mockData = [
    {
      id: 0,
      isDone: false,
      content: "Todo1",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "Todo2",
      date: new Date().getTime(),
    },
  ];
  const [todos, setTodo] = useState(mockData);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodo([newTodo, ...todos]);
  };

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} />
      </div>
    </>
  );
}

export default App;
