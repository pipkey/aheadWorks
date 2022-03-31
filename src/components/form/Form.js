import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getWeatherThunkCreator } from "../../redux/reducer";
import style from "./Form.module.css";


const Form = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const addCard = (e) => {
    e.preventDefault();
    dispatch(getWeatherThunkCreator(value));
    setValue("");
  };

  return (
    <div className={style.formWrapper}>
      <form>
        <input
          className={error ? style.inputERROR : style.input}
          placeholder="add your task"
          value={value}
          onChange={(e) =>
            e.target.value.length < 300
              ? setValue(e.target.value) + setError(false)
              : setError(true)
          }
        />
        <button onClick={addCard} style={{ display: "none" }} disabled={error}>
          add
        </button>
      </form>
      {!error ? <p className={style.text}>{value ? "add note ..." : ""}</p> : <p className={style.errorText}> Много текста </p>}
    </div>
  );
};
export default Form;
