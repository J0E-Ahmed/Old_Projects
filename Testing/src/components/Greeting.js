import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  function handleChangeAfterClick() {
    setChangeText(true);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <p>it's good to see you</p>}
      {changeText && <p>After Click</p>}
      <button onClick={handleChangeAfterClick}>click to change</button>
    </div>
  );
};
export default Greeting;
