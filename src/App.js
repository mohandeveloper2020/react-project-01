import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<Home />} index />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
