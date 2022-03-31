import "./App.css";
import Card from "./components/cards/Card";
import Form from "./components/form/Form";
import {useSelector } from "react-redux";

function App() {
  const cards = useSelector((state) => state);
  
  return (
    <div className="App">

      <Form/>

      <div>
        {cards.length > 0
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
                />
              );
            })
          : "Пока что карт не существует"}
      </div>
    </div>
  );
}

export default App;
