import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Krishna",
    age: 24,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        TailWind test
      </h1>
      <Card username="krishna" btntext="click me" />
      <Card username="Chaitanya" btntext="Visit me" />
    </>
  );
}
export default App;
