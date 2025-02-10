import TimeChallenge from "./components/TimerChallenge.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title={"easy"} targetTime={1} />
        <TimeChallenge title={"not easy"} targetTime={5} />
        <TimeChallenge title={"getting tough"} targetTime={10} />
        <TimeChallenge title={"pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
