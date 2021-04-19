import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      alert("Invalid number");
    }
  };
  console.log(list);
  return (
    <>
      <section className="container">
        <h2>color generator</h2>
        <form type="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className={error ? "input-error" : null}
          />
          <button>Generate</button>
        </form>
      </section>

      <section className="colors">
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              {...item}
              indexnum={index}
              hexColor={item.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
