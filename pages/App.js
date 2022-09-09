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
      text: "Hafermilch und Obst kaufen",
    },
  ]);

  return (
    <>
      <h1>Todo-List</h1>
      <ul>
        {todoItems.map((item) => (
          <li key="{item.id}">{item.text}</li>
        ))}
      </ul>
    </>
  );
}
