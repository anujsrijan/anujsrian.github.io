import { useState } from "react";
import Home from "./pages/home";
import NavBar from "../src/components/ui/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
      <main className="container">
        <NavBar />
        <Home />
      </main>
  );
}

export default App;
