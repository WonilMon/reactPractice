import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";


// 1. "/" : 모든 일기를 조회 하는 Home
// 2. "/new" : 새로운 일기를 작서하는 New
// 3. "/diary" : 일기를 상세조회하는 Diary
function App() {
  // 링크이동은 Link, 이벤트핸들러를 통한 이동은 nav
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };

  return (
    // 마치 switch 처럼 경로를 찾으면 보내줌
    // **** Routes 안에는 Route만 넣을 수 있음 ****
    // **** 바깥에 넣는 요소는 모든 페이지에 동일하게 렌더링 ****
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
