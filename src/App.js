import "./App.css";
import Ach from "./screens/Ach";
import Edu from "./screens/Edu";
import Exp from "./screens/Exp";
import HeroBody from "./screens/HeroBody";
import NavBar from "./screens/NavBar";
import Results from "./screens/Results";
import Contacts from "./screens/Contacts";


function App() {
  return (
    <>
      <NavBar />
      <HeroBody />
      <Exp />
      <Edu />
      <Results />
      <Ach />
      <Contacts/>
    </>
  );
}

export default App;
