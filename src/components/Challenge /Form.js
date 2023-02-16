import React, { useState } from "react";
import Chat from "../Chat";

const Form = ({ setDdt }) => {
  const [frmDt, setFrmDt] = useState("");
  const getDt = (e) => {
    const { value } = e.target;
    setFrmDt(value);
  };
  const btnSubmit = (e) => {
    e.preventDefault();

    setDdt(frmDt);
  };
  return (
    <div>
      <Chat frmDt={frmDt} /> {/*sending props */}
      <form onSubmit={btnSubmit}>
        <input
          onChange={getDt}
          type="text"
          name=" "
          id=""
          required
          placeholder="What is your wish?"
        />
        <br />
        <button className="bg-warning color-light" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
