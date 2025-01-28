import { useReducer } from "react";

// 변환기 : 실제로 변환시키는 역할
function reducer(state, action) {
  if (action.type === "INCREASE") {
    return state + action.data;
  }
}

const Count = () => {
  // dispatch : 발송하다 급송하다
  // 상태변화가 있어야 한다는 것을 알리는(발송하는) 함수)
  const [countNum, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 액션객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
  return (
    <>
      <div>{countNum}</div>
      <button onClick={onClickPlus}>+</button>
    </>
  );
};

export default Count;
