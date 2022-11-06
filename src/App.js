import { Routes, Route } from "react-router-dom";
import "./App.css";
import Greeting from "./Components/greetings";
import {Errorpage} from "./pages";


//creating an component (App)...

const App = () => {
  return (
    <section>
      <Routes>
      <Route path="/" element={<Greeting />} />
      <Route path="*" element={<Errorpage />}/>
      </Routes>
    </section>
  );
}

export default App;