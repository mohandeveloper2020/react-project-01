import "./App.css";
import Header from "./components/Header";
import Name from "./components/Name";
import Nav from "./components/Nav";
import car from "./images/car.jfif";

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
      {/* <Users /> */}
      <Name {...name} edu={education} age={age} married={isMarried}>
        <Nav />
      </Name>
      <img src={car} alt={"car"} />
      <Header></Header>
    </div>
  );
}

export default App;
