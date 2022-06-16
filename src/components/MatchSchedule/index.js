import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllClub } from "../../redux/features/allClubSlice";
import { getStadiumById } from "../../redux/features/stadiumSlice";
import { createNewMatch, getMatchByName } from "../../redux/features/matchSlice";
import {
  Container,
  Pagination,
  Table,
  Tab,
  Row,
  Col,
  Nav,
  Modal,
  Button,
} from "react-bootstrap";
import Loading from "../../more/Loading";
import { generateSchedule } from "sports-schedule-generator";

export default function MatchSchedule() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const { allClub } = useSelector((state) => state.allClub);

  useEffect(() => {
    dispatch(getAllClub({}));
  }, []);
  useEffect(() => {
    if (allClub) {
      setData(allClub);
    }
  }, [allClub]);

  const [schedule, setSchedule] = useState([]);
  const [result, setResult] = useState([]);
  const [totalRound, setTotalRound] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleMatchDetails = (matchName, team1, team2, date, time, stadiumMatch, id1, id2) => {
    // setShow(true)
    navigate(`/match-details/${matchName}`, {state:{team1, team2, date, time, stadiumMatch, id1, id2, matchName}});
  };
  const handleMatchDetailsWatch = (matchName, team1, team2, date, time, stadiumMatch, id1, id2, matchId) => {
    // setShow(true)
    navigate(`/match-details/watch/${matchName}`, {state:{team1, team2, date, time, stadiumMatch, id1, id2, matchId}});
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (data.length % 2 === 0) {
      setTotalRound(data.length - 1);
    } else {
      setTotalRound(data.length - 1);
    }
  }, [data]);

  useEffect(() => {
    setSchedule(generateSchedule([...data]));
  }, [data]);
  const detailsRound = (details, back = 0, add_date = 0) => {
    return details.map((detail, index) => {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        (today.getDate() + add_date);
      var time = "10h";
      let matchName = !back ? `${detail.home.fullName.replace(/\s/g, '')}${detail.away.fullName.replace(/\s/g, '')}` : `${detail.away.fullName.replace(/\s/g, '')}${detail.home.fullName.replace(/\s/g, '')}`
      let team1 = !back ? detail.home.fullName : detail.away.fullName
      let team2 = !back ? detail.away.fullName : detail.home.fullName
      let stadiumMatch = !back ? detail.home.stadiumId.name : detail.away.stadiumId.name
      let id1 = !back ? detail.home._id : detail.away._id
      let id2 = !back ? detail.away._id : detail.home._id
      let matchId = 
      dispatch(
        createNewMatch({
          matchName: matchName,
          timeStart: time,
          date: date,
          stadiumId: !back ? detail.home.stadiumId : detail.away.stadiumId,
        })
      );
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{team1}</td>
          <td>{team2}</td>
          <td>
            {date} {time}
          </td>
          <td>
            {stadiumMatch}
          </td>
          <td>
            <i
              className="fa-solid fa-pencil me-3 ms-3"
              onClick={() => handleMatchDetails(matchName, team1, team2, date, time, stadiumMatch, id1, id2, matchName)}
            ></i>
            <i
              className="fa-solid fa-eye"
              onClick={() => handleMatchDetailsWatch(matchName, team1, team2, date, time, stadiumMatch, id1, id2, matchId)}
            ></i>
          </td>
        </tr>
      );
    });
  };
  const scheduleDetails = (schedule) => {
    const schedule1 = schedule.map((round, index) => {
      return (
        <div>
          <h2>Lịch thi đấu vòng {index + 1}</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Đội 1</th>
                <th>Đội 2</th>
                <th>Ngày - giờ</th>
                <th>Sân</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{detailsRound(round, 0, index)}</tbody>
          </Table>
        </div>
      );
    });
    const schedule2 = schedule.map((round, index) => {
      return (
        <div>
          <h2>Lịch thi đấu vòng {index + totalRound + 1}</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Đội 1</th>
                <th>Đội 2</th>
                <th>Ngày - giờ</th>
                <th>Sân</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{detailsRound(round, 1, index + totalRound + 1)}</tbody>
          </Table>
        </div>
      );
    });
    return [...schedule1, ...schedule2];
  };
  useEffect(() => {
    setResult(scheduleDetails(schedule));
  }, [schedule]);

  return (
    <Container className="pt-3" fluid>
      <h1 className="text-center mb-5">Lịch Thi Đấu</h1>

      <Tab.Container id="tabs-schedule" defaultActiveKey="0">
        <Row>
          <Col sm={2} lg={1}>
            <Nav variant="pills" className="flex-column">
              {result.map((item, index) => {
                return (
                  <Nav.Item>
                    <Nav.Link eventKey={index}>Vòng {index + 1}</Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={10} lg={11}>
            <Tab.Content>
              {result.map((item, index) => {
                return <Tab.Pane eventKey={index}>{item}</Tab.Pane>;
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
