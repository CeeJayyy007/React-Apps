import { useState } from "react";


function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  
  function changeTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    setInterval(changeTime, 1000);
  }

  
  return (
    <div className="container">
      <h1>{ time }</h1>
      <button onClick = { changeTime }>Get Time</button>
    </div>
  );
}

export default App;
