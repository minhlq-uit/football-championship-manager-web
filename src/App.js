import {
  Routes,
  Route,
} from "react-router-dom";
import AppBar from "./components/AppBar";
import AppContent from "./components/Appcontent";
import League from "./components/League";
import CreateLeague from "./components/League/CreateLeague";
import CreateTeam from "./components/Competitor/CreateTeam";
import Competitor from "./components/Competitor";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<AppContent />}> </Route>
        <Route path="/league" element={<League />}>
          <Route path="create-tournament" element={<CreateLeague />}></Route>
        </Route>
        <Route path= "/competitor" element={<Competitor />}>
        <Route path="create" element={<CreateTeam />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
