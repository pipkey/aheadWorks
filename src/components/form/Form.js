import React from "react";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { getWeatherThunkCreator } from "../../redux/reducer";
import axios from "axios";



let lat = "53.8981";
let lon = "30.3325";
const API_KEY = `7f30d4b1c82ad09e14f5eea3381c21e2`;
let link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;



const Form = () => {
  const [value, setValue] = useState("");
  const temp = axios.get(link).then(res=> res.data.main.temp);
  const dispatch = useDispatch();
  

  const addCard = (e) => {
    e.preventDefault();
    dispatch(getWeatherThunkCreator(value))
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
        <button onClick={addCard} style={{display:"none"}}> add </button>
      </form>
      <p>{value ? "add note..." : ""}</p>
    </div>
  );
};
export default Form;
