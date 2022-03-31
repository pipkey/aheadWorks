import React from "react";
import { useDispatch } from "react-redux";

const Card = ({ key, id, anotation, weather, city, date, time }) => {
  const dispatch = useDispatch();

  const deletCard = () => {
    dispatch({ type: "DELETE_CARD", id });
  };

  return (
    <div className="card__wrapper" key={key}>
      <p>{anotation}</p>
      <div className="">
        <div className="card-weather__wrapper">
          <p>{weather}</p>
          <p>{city}</p>
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <div className="but">
          <button onClick={deletCard}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
