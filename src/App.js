import { useState } from "react";
import "./App.css";
import Card from "./components/cards/Card";
import Form from "./components/form/Form";
import {useSelector } from "react-redux";

function App() {

  const cards = useSelector((state) => state);

  // ! состояние инпута
  const [value, setValue] = useState("");
  // ! функция удалеия карточки
  const removeCard = (cardID) => {
    // setCards(cards.filter(c => c.id !== cardID));
  };

  return (
    <div className="App">
      <Form value={value} setValue={setValue} />

      <div>
        {cards.length > 0
          ? cards.map((el) => {
              return (
                <Card
                  id={el.id}
                  anotation={el.anotation}
                  weather={el.weather}
                  city={el.city}
                  date={el.date}
                  removeCard={removeCard}
                />
              );
            })
          : "Пока что карт не существует"}
      </div>
    </div>
  );
}

export default App;
