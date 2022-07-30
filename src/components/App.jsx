import React from "react";
import emojimedia from "../emojipedia";
import Dic from "./dic";

function Cards(emo){
  return <Dic 
  key = {emo.id}
  emoji = {emo.emoji}
  name = {emo.name}
  meaning = {emo.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojimedia.map(Cards)}
      </dl>
    </div>
  );
}

export default App;
