import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export const CardsList = () => {

  const cards = useSelector((state) => state);

  return (
    <div>
      {!!cards
        ? cards.map((el, index) => {
            return (
              <Card
                key={el.id + index}
                id={el.id}
                anotation={el.anotation}
                weather={el.weather}
                city={el.city}
                date={el.date}
                time={el.time}
                icon={el.icon}
              />
            );
          })
        : "Пока что карт не существует"}
    </div>
  );
};
