import NavBars from "../../components/NavBar/NavBars"
import back from "../../styles/background.module.css";
import scr from "../../styles/scr.module.css";
import Main from "./Main/Main";
import About from "./About/Main";
import Member from "./Members/Main";

function App() {
  return (
    <div className={back.body}>
      <NavBars />
      <div className={scr.container}>
        <div className={scr.section}>
          <Main />
        </div>
        <div className={scr.section}>
          <About />
        </div>
        <div className={scr.section}>
          <Member />
        </div>
      </div>
    </div>
  );
}

export default App;