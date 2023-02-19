import React, { useState } from "react";

export default function ColorChange() {
  const alphabet = [
    "f",
    "e",
    "d",
    "c",
    "b",
    "a",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
  ];
  const [colorChange, setColorChange] = useState("a9a9f9");
  const randomAlphabet =
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)];
  const handleClickToChangeColor = () => {
    setColorChange(randomAlphabet);
  };
  return (
    <div
      className="flex my-10 w-96 h-80 gap-4 justify-center mx-auto py-32 rounded-xl shadow-inner shrink-0"
      style={{ border: `1px solid #${colorChange}` }}
    >
      <button
        className="w-20 h-20 p-4 rounded-xl shadow-sm active:shadow-inner bg-slate-50"
        onClick={handleClickToChangeColor}
      >
        Button!
      </button>
      <div
        className="w-20 h-20 rounded-lg shadow-xl"
        style={{ backgroundColor: `#${colorChange}` }}
      ></div>
    </div>
  );
}
