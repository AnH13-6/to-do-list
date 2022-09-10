import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function List() {
  const [todoItems, setTodoItems] = useState([
    {
      id: nanoid(),
      text: "Wäsche waschen",
    },
    {
      id: nanoid(),
      text: "Staubsaugen",
    },
    {
      id: nanoid(),
      text: "die Welt retten",
    },
    {
      id: nanoid(),
      text: "Blumen gießen",
    },
  ]);

  function addItem(event) {
    event.preventDefault();
    const inputElement = event.target.elements.newItem;
    const newListItem = {
      id: nanoid(),
      text: inputElement.value,
    };

    const newListArray = [...todoItems, newListItem];
    setTodoItems(newListArray);
  }

  function deleteItem(id) {
    const newListArray = todoItems.filter((item) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoItems(newListArray);
  }

  return (
    <>
      <h1>Todo-List</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          id="newItem"
          name="newItem"
          placeholder="todo hinzufügen"
        ></input>
        <button type="submit">Hinzufügen</button>
      </form>
      <ul style={{ listStyle: "none" }}>
        {todoItems.map((item) => (
          <li key="{item.id}">
            <input type="checkbox" />
            {item.text}{" "}
            <button
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
