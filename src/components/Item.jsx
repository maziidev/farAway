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
        {item.quantity}
        {item.description}
      </span>
      <button className="button">X</button>
    </li>
  );
}

export default Item;
