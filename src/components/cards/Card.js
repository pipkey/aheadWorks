import React from "react";

const Card = ({id,anotation,weather,city,date,removeCard}) => {

const deletCard =()=>{
  removeCard(id);
} 

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
  )
};

export default Card;
