import "./App.css";
import { useState } from "react";
import Form from "./components/Challenge /Form";
import Display from "./components/Challenge /Display";

const App = () => {
  const [dis, setDis] = useState();
  return (
    <div>
      <Form setDis={setDis} />
      <Display dis={dis} />
    </div>
  );
};

export default App;
