import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <main className="wrapper">
        <Header />
        <ButtonComponent text="Github" />
        <ButtonComponent text="Frontend Mentor" />
        <ButtonComponent text="Linkedin" />
        <ButtonComponent text="Twitter" />
        <ButtonComponent text="Instagram" />
      </main>
    </div>
  );
};

export default App;
