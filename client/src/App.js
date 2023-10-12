import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateGames from "./CreateGames";
import Game from "./Game";

 
function App() {  

  return (

    <>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateGames/>}/>
        <Route path="/Game" element={<Game />} />
 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




 