import { useSelector, useDispatch } from "react-redux";


const App = () => {
  const { count , count1 ,count2} = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClickAdd = (input) => {
    if(input === 0){
      dispatch({ type: "ADD" })
    }
    else if(input === 1){
      dispatch({ type: "ADD1" })
    }
    else if(input === 2){
      dispatch({ type: "ADD2" })
    }
  }

  const handleClickRemove = (input) => {
    if(input === 0){
      dispatch({ type: "REMOVE" });
    } else if(input === 1){
      dispatch({ type: "REMOVE1" });
    }else if(input === 2){
      dispatch({ type: "REMOVE2" });
    }
  }
  return (
    <>
    <h1>count :- {count}</h1>
    <button onClick={()=> handleClickAdd(0)}>Add</button>
    <button onClick={()=> handleClickRemove(0)}>Remove</button>
    <h1>count1 :- {count1}</h1>
    <button onClick={()=> handleClickAdd(1)}>Add</button>
    <button onClick={()=> handleClickRemove(1)}>Remove</button>
    <h1>count2 :- {count2}</h1>
    <button onClick={()=> handleClickAdd(2)}>Add</button>
    <button onClick={()=> handleClickRemove(2)}>Remove</button>
    </>
  )
};

export default App;
