import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [status, setStatus] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });
  console.log(status);

  return (
    <div style={{ display: "flex-column" }}>
      <div>
        <input
          onChange={() =>
            setStatus({
              check1: !status.check1,
              check2: !status.check2,
              check3: !status.check3,
              check4: !status.check4,
            })
          }
          checked={
            status.check1 && status.check2 && status.check3 && status.check4
          }
          id="all"
          type="checkbox"
        />
        <label>Select All</label>
      </div>

      {/* Child */}
      <div>
        <input
          onChange={() => setStatus({ ...status, check1: !status.check1 })}
          checked={status.check1}
          id="check1"
          type="checkbox"
        />
        <label>1</label>
      </div>
      <div>
        <input
          onChange={() => setStatus({ ...status, check2: !status.check2 })}
          checked={status.check2}
          id="check2"
          type="checkbox"
        />
        <label>2</label>
      </div>
      <div>
        <input
          onChange={() => setStatus({ ...status, check3: !status.check3 })}
          checked={status.check3}
          id="check3"
          type="checkbox"
        />
        <label>3</label>
      </div>
      <div>
        <input
          onChange={() => setStatus({ ...status, check4: !status.check4 })}
          checked={status.check4}
          id="check4"
          type="checkbox"
        />
        <label>4</label>
      </div>
    </div>
  );
}

export default App;
