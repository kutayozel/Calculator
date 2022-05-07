import React, { useState } from "react";

export default function Button() {
  const [button, setButton] = useState();
  console.log(button)

  const add = (button) => {
    button + button
  }

  return (
    <div className="buttons">
      <button className="numbers" onClick={() => setButton()}>
        C
      </button>
      <button className="numbers" onClick={() => setButton()}>
        +/-
      </button>
      <button className="numbers" onClick={() => setButton()}>
        %
      </button>
      <button className="numbers" onClick={() => setButton(7)}>
        7
      </button>
      <button className="numbers" onClick={() => setButton(8)}>
        8
      </button>
      <button className="numbers" onClick={() => setButton(9)}>
        9
      </button>
      <button className="numbers" onClick={() => setButton(4)}>
        4
      </button>
      <button className="numbers" onClick={() => setButton(5)}>
        5
      </button>
      <button className="numbers" onClick={() => setButton(6)}>
        6
      </button>
      <button className="numbers" onClick={() => setButton(1)}>
        1
      </button>
      <button className="numbers" onClick={() => setButton(2)}>
        2
      </button>
      <button className="numbers" onClick={() => setButton(3)}>
        3
      </button>
      <button className="numbers" onClick={() => setButton(0)}>
        0
      </button>
      <button className="numbers" onClick={() => setButton()}>
        ,
      </button>
      <button className="numbers" onClick={() => setButton()}>
        =
      </button>
      <div>
        SAYILARRRRRR:{button}
      </div>
    </div>
  );
}
