import React from "react";

function Item({ item }) {
  return (
    <li>
      <span
        style={
          item.packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        <span className="spacer">{item.quantity}</span>
        <span>{item.description}</span>
      </span>
      <button className="button">X</button>
    </li>
  );
}

export default Item;
