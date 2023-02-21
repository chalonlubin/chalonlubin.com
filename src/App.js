import React from "react";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./routes/RouteList";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import "./sass/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouteList />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
