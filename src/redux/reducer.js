import { v1 } from "uuid";
import axios from "axios";

let lat = "53.8981";
let lon = "30.3325";
const API_KEY = `7f30d4b1c82ad09e14f5eea3381c21e2`;
let link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

export const reducer = (state = [], action) => {
  let date = new Date();

  switch (action.type) {
    case "ADD_CARD":
      let newCard = {
        id: v1(),
        anotation: action.data.value,
        weather:
          Math.round(action.data.temp) + "°C",
        icon: action.data.icon,
        city: "Mogilev",
        date: `${date.getDate()}. ${
          date.getMonth() + 1 < 10
            ? "0" + `${date.getMonth() + 1}`
            : date.getMonth() + 1
        }. ${date.getFullYear()}`,
        time: `${
          date.getHours() < 10 
            ? "0" + `${date.getHours()}` 
            : date.getHours()
        }: ${
          date.getMinutes() < 10
            ? "0" + `${date.getMinutes()}`
            : date.getMinutes()
        }`,
      };

      return [...state, newCard];
    case "DELETE_CARD":
      return state.filter((el) => el.id !== action.id);

    default:
      return state;
  }
};

// ! actionCreator
export const addCardAC = (data) => ({
  type: "ADD_CARD",
  data,
});

// ! thunk
export const getWeatherThunkCreator = (value) => {
  return async (dispatch) => {
    let res = await axios.get(link);
    res &&
      dispatch(
        addCardAC({
          value,
          temp: res.data.main.temp,
          icon: res.data.weather[0].icon,
        })
      );
  };
};
