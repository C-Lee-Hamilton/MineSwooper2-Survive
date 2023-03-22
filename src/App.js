import { GameBoard } from "./Components/GameBoard";
import "./App.css";
import banner from "./MS2.png";
import banner2 from "./survive.png";

function App() {
  return (
    <div className="App">
      <div>
        <img className="banner" src={banner} alt="x" />
        <br />
        <img className="banner2" src={banner2} alt="x" />
      </div>
      <GameBoard />
    </div>
  );
}

export default App;
