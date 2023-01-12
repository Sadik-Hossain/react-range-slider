import { useState } from "react";
import DualRangeSlider from "./DualRangeSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>hello range</h1>
      <DualRangeSlider />
    </div>
  );
}

export default App;
