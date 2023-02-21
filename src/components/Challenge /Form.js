import React, { useState } from "react";
import Chat from "../Chat";

const Form = ({ handleOnSubmit }) => {
  const [ddt, setDdt] = useState("");
  const eDdt = (e) => {
    const { value } = e.target;
    setDdt(value);
  };
  const btnSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(ddt);
  };
  return (
    <div>
      <form onSubmit={btnSubmit}>
        <Chat ddt={ddt} />
        <label>Chat:</label>
        <input
          type="text"
          required
          placeholder="Write your name"
          onChange={eDdt}
        />
        <button type="Submit">Submit</button>
      </form>
      <br />
    </div>
  );
};

export default Form;
