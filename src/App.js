import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "😑": "Expressionless Face",
  "😡": "Pouting Face",
  "💯": "Hundred Points Symbol",
  "🙌": "Person Raising Both Hands in Celebration",
  "🌸": "Cherry Blossom",
  "😊": "Smiling",
  "😳": "disbelief",
  "🎊": "Confetti Ball",
  "✅": "Check Mark Button",
  "💥": "Collision",
  "💐": "Bouquet",
  "🤞": "Crossed Fingers"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Know the meaning of emoji</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Enter emoji with WIN + period(.)"}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)} className="emo">
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
