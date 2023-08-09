import { useSelector, useDispatch } from "react-redux";


const App = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClickAdd = () => dispatch({ type: "ADD" });
  const handleClickRemove = () => dispatch({ type: "REMOVE" });
  return (
    <>
    <h1>{count}</h1>
    <button onClick={handleClickAdd}>Add</button>
    <button onClick={handleClickRemove}>Remove</button>
    </>
  )
};

export default App;
