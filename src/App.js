import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<Home />} index />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
