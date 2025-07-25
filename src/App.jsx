import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/home";
import NavBar from "../src/components/ui/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
