import "./App.css";
import Header from "./Header";
import Name from "./Name";

function App() {
  let name = {
    firstName: "Mohan",
    lastName: "Munna",
  };

  return (
    <div className="App">
      <Name name={name} />
      <Header></Header>
    </div>
  );
}

export default App;
