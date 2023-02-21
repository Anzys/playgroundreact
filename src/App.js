import "./App.css";
import { useState } from "react";
import Form from "./components/Challenge /Form";
import Display from "./components/Challenge /Display";

const App = () => {
  const [dis, setDis] = useState([]);

  const handleOnSubmit = (newData) => {
    setDis([...dis, newData]);
  };

  return (
    <div className="">
      <Form handleOnSubmit={handleOnSubmit} />
      <br />

      <Display className="style-none" dis={dis} />
    </div>
  );
};

export default App;
