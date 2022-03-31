import React from "react";
import { useDispatch } from "react-redux";
import style from './card.module.css'

const Card = ({ key, id, anotation, weather, city, date, time, icon }) => {
  const dispatch = useDispatch();

  const deletCard = () => {
    dispatch({ type: "DELETE_CARD", id });
  };

  return (
    <div className={style.card__wrapper} key={key}>
      <p className={style.anot}>{anotation}</p>
      <div className={style.info}>
        <div className="card-weather__wrapper">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          <p>{weather}</p>
          <p>{city}</p>
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <div className="but">
          <button onClick={deletCard} className={style.btn}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
