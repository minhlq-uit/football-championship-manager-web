import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import AppContent from "./components/Appcontent";
import League from "./components/League";
import CreateLeague from "./components/League/CreateLeague";
import Manage from "./components/Manage";
import NewTeam from "./components/NewTeam";
import MatchSchedule from "./components/MatchSchedule";
import MatchDetails from "./components/MatchDetails";
import MatchDetailsWatch from "./components/MatchDetailsWatch";
import AllPlayer from "./components/AllPlayer";
import AllClub from "./components/AllClub";

import { ToastContainer, toast } from 'react-toastify';
import Standings from "./components/Standings";
import ListPlayerGoal from "./components/ListGoalPlayer";
import Setting from "./components/Setting";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<AppContent />}>
          {" "}
        </Route>
        <Route path="/league" element={<League />}>
          <Route path="create-tournament" element={<CreateLeague />}></Route>
        </Route>
        <Route path="/account/myleague" element={<Manage />}></Route>
        <Route path="/account/create-team" element={<NewTeam />}></Route>
        <Route
          path="/account/create-match-schedule"
          element={<MatchSchedule />}
        ></Route>
        <Route
          path="/match-details/:id"
          element={<MatchDetails />}
        ></Route>
        <Route
          path="/match-details/watch/:matchName"
          element={<MatchDetailsWatch />}
        ></Route>
        <Route
          path="/all-player"
          element={<AllPlayer />}
        ></Route>
        <Route
          path="/all-club"
          element={<AllClub />}
        ></Route>
        <Route
          path="/standings"
          element={<Standings />}
        ></Route>
        <Route
          path="/list-player-goal"
          element={<ListPlayerGoal />}
        ></Route>
        <Route
          path="/setting"
          element={<Setting />}
        ></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
