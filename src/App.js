import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import QuesAns from "./components/QuesAns/QuesAns";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <QuesAns></QuesAns>
    </div>
  );
}

export default App;
