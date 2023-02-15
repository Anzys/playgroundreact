import "./App.css";
import { useState } from "react";
import Display from "./Display";
import Btns from "./Btns";
const App = () => {
  const [counter, setCounter] = useState(0);

  const update = (operator) => {
    const fun = {
      "+": () => setCounter(counter + 1),
      "-": () => setCounter(counter - 1),
      reset: () => setCounter(0),
    };
    fun[operator]();
  };
  return (
    <div>
      <Display counter={counter} />
      <br />
      <Btns update={update} />
    </div>
  );
};

export default App;
