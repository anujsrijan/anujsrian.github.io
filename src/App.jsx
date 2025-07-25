import { useState } from "react";
import Home from "./pages/home";
import NavBar from "../src/components/ui/NavBar";

function App() {

  return (
      <main className="container">
        <NavBar />
        <Home />
      </main>
  );
}

export default App;
