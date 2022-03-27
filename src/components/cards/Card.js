import React from "react";
import { useDispatch } from "react-redux";

const Card = ({ id, anotation, weather, city, date}) => {
  const dispatch = useDispatch();

  const deletCard = () => {
    dispatch({type:"DELETE_CARD",id})

  };

  return (
    <div className="card__wrapper">
      <p>{anotation}</p>
      <div className="">
        <div className="card-weather__wrapper">
          <h4>{weather}</h4>
          <p>{city}</p>
          <p>{date}</p>
        </div>
        <div className="but">
          <button onClick={deletCard}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
