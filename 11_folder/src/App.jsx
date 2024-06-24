import "./App.css";
import explorer from "./data/Folderdata";
import Folder from "./component/Folder";

function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
