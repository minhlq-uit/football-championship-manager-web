import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import LeagueInfo from "./LeagueInfo";
import Dashboard from "./Dashboard";
import CreateLeague from "./CreateLeague";

export default function League() {
  const [createLeague, setCreateLeague] = useState(false);
  let location = useLocation();
  let matchCreateTournament = "/league/create-tournament" === location.pathname;

  useEffect(() => {
    setCreateLeague(matchCreateTournament);
  }, [matchCreateTournament]);
  return (
    <div id="League">
      {!createLeague ? (
        <>
          <LeagueInfo />
          <Dashboard />
        </>
      ) : (
        <CreateLeague />
      )}
    </div>
  );
}
