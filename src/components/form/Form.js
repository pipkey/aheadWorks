import React from "react";
import { useDispatch} from "react-redux";

const Form = ({ value, setValue}) => {

  const dispatch = useDispatch();
  
  const addCard = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CARD", payload: value });
    setValue("");
  };


  return (
    <div>
      <form>
        <input
          placeholder="add your task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addCard}> add </button>
      </form>
      <p>{value ? "add note..." : ""}</p>
    </div>
  );
};
export default Form;
