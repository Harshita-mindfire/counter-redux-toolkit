import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decreaseCount, increaseCount } from "./redux/counterReducer";

function App() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <button onClick={() => dispatch(increaseCount())}>
          Increase Count
        </button>
        <button onClick={() => dispatch(decreaseCount())}>
          Decrease Count
        </button>
      </div>
      <p>count is {counter.count}</p>
    </>
  );
}

export default App;
