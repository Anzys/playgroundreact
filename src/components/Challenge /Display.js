import React from "react";

const Display = ({ dis }) => {
  return (
    <p>
      <ul>
        {dis.map((item, i) => {
          return <li>{item}</li>;
        })}
      </ul>
    </p>
  );
};

export default Display;
