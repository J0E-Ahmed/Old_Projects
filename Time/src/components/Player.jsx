import { useRef, useState } from "react";

export default function Player() {
  const [enterPlayerName, setEnterPlayerName] = useState(null);
  const playerName = useRef();

  function handleClick() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ? enterPlayerName : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
