export default function GameOver({ winner , onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      { winner && <p>{winner} is Won!</p>}
      { !winner && <p>it's Draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
