import {
  Routes,
  Route,
} from "react-router-dom";
import AppBar from "./components/AppBar";
import AppContent from "./components/Appcontent";
import League from "./components/League";
import CreateLeague from "./components/League/CreateLeague";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<AppContent />}> </Route>
        <Route path="/league" element={<League />}>
          <Route path="create-tournament" element={<CreateLeague />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
