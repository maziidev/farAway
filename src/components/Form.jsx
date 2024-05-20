import React, { useState } from "react";

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // function is triggered when the form is submitted
  function handleSubmit(e) {
    // prevents reloading the page when the enter key is pressed on the keyboard
    e.preventDefault();

    // if block checks out for null data
    if (!description) return;

    // new item array
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // onsubmit of the form, restores all item back to it's default state
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* array handles number from 1 - 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
