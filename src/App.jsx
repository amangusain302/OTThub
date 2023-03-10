import logo from "./logo.svg";
import "./App.css";
import Card from "./component/Card";
import Header from "./component/Header";
import { seriesData } from "./data/seriesData";

function App() {
  function nCard(val){
    return(<Card
          data = {val}
        />);
  }
  return (
    <>
    <Header/>
      <div className="playlistContainer"> 
        {seriesData.map((val)=>{
         return(<Card
          data = {val}
        />);
         })}
      </div>
    </>
  );
}

export default App;
