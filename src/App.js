import "./App.css";
import Header from "./components/Header";
import Name from "./components/Name";
import Bio from "./components/Bio";
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  let name = {
    firstName: "Mohan",
    lastName: "Munna",
  };

  let education = ["bcom", "mba"];

  let age = 35;

  let isMarried = true;

  return (
    <div className="App">
      <Header></Header>
      <div className="px-5 bg-light">
        <Name {...name} edu={education} age={age} married={isMarried}>
          <Bio />
        </Name>
        <Users />
        <Products />
      </div>
    </div>
  );
}

export default App;
