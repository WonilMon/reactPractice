import "./App.css";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import Count from "./components/Count";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => {
        todo.id !== action.data;
      });
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const idRef = useRef(2);
  // const [todos, setTodo] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);

  // const onCreate = (content) => {
  //   const newTodo = {
  //     id: idRef.current++,
  //     isDone: false,
  //     content: content,
  //     date: new Date().getTime(),
  //   };
  //   setTodo([newTodo, ...todos]);
  // };
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  // const onUpdate = (targetId) => {
  //   setTodo(
  //     todos.map((todoList) => {
  //       if (targetId === todoList.id) {
  //         return {
  //           ...todoList,
  //           isDone: !todoList.isDone,
  //         };
  //       }
  //       return todoList;
  //     })
  //   );
  // };

  const onUpdate = useCallback((id) => {
    dispatch({
      type: "UPDATE",
      data: id,
    });
  }, []);

  // const onDelete = (targetId) => {
  //   setTodo(todos.filter((todoList) => todoList.id !== targetId));
  // };

  // const onDelete = (id) => {
  //   dispatch({
  //     type: "DELETE",
  //     data: id,
  //   });
  // };

  // 첫번째 인수:최적화하고싶은 함수,
  // 두번쨰 인수:뎁스(의존성 배열)
  const onDelete = useCallback((id) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            {/* <Editor onCreate={onCreate} /> */}
            {/* <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
        <Count />
      </div>
    </>
  );
}

export default App;
