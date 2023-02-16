import "./App.css";
import { useState } from "react";

import Form from "./components/Challenge /Form";
import Display from "./components/Challenge /Display";
const App = () => {
  const [ddt, setDdt] = useState("");
  ddt = [];
  return (
    <div>
      <Form setDdt={setDdt} />
      <hr />
      <Display ddt={ddt} />
    </div>
  );
};

export default App;
