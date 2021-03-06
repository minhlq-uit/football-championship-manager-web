import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  Form,
  Row,
  Col,
  Button,
  Container,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import {
  getPlayerByClubId,
  getPlayerById,
} from "../../redux/features/playerSlice";
import { getMatchDetailById } from "../../redux/features/matchDetailsSlice";
import { createNewGoal } from "../../redux/features/goalSlice";
import { createNewMatchDetail } from "../../redux/features/matchDetailsSlice";
import { getMatchByMatchName } from "../../redux/features/matchSlice";
import { updateStandingAfterMatch } from "../../redux/features/standingSlice";
import { toast } from "react-toastify";
// import "./matchdetails.css";
import { useSelector } from "react-redux";
export default function MatchDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  let state = location.state;
  console.log('state', state)
  const [goalScorer, setGoalScorer] = useState([]);
  const [name, setName] = useState("");
  const [team, setTeam] = useState(state.team1);
  const [type, setType] = useState("A");
  const [time, setTime] = useState(0);
  const [show, setShow] = useState(false);
  const [goal1, setGoal1] = useState(0);
  const [goal2, setGoal2] = useState(0);
  const [totalGoal, setTotalGoal] = useState(0);
  const [listPlayers, setListPlayers] = useState([]);
  const [countTeam1, setCountTeam1] = useState(0);
  const [countTeam2, setCountTeam2] = useState(0);
  const [idPlayer, setIdPlayer] = useState("");
  const [isSubmit, setIsSubmit] = useState(false)

  const { players, player } = useSelector((state) => state.player);
  const { match } = useSelector((state) => state.match);
  const { matchDetails } = useSelector((state) => state.matchDetails);

  const dispatch = useDispatch();
//   useEffect(() => {
//     setTotalGoal(parseInt(goal1) + parseInt(goal2));
//   }, [goal1, goal2]);


//   useEffect(() => {
//     console.log("matchName", state.matchName);
//     dispatch(getMatchByMatchName({ matchName: state.matchName }));
//   }, []);

//   useEffect(() => {
//     if (idPlayer) {
//       dispatch(getPlayerById({ playerId: idPlayer }));
//     }
//   }, [idPlayer]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddGoal = () => {
    if (time >= 0 && time <= 90) {
      if (team === state.team1) {
        setCountTeam1(countTeam1 + 1);
      } else if (team === state.team2) {
        setCountTeam2(countTeam2 + 1);
      }

      setGoalScorer([
        ...goalScorer,
        {
          name: player.playerName,
          team,
          type,
          time,
        },
      ]);
      setName("");
      setTeam("");
      setType("");
      setTime(0);

      dispatch(
        createNewGoal({
          typeGoal: type,
          goalTime: time,
          playerId: idPlayer,
        })
      );

      handleClose();
    } else {
      toast.error("Th???i ??i???m ghi b??n kh??ng h???p l???!!!");
    }
  };
  const handleSubmitMatchDetails = () => {
    dispatch(
      createNewMatchDetail({
        club1Goal: goal1,
        club2Goal: goal2,
        club1Id: state.id1,
        club2Id: state.id2,
        matchId: match[0]._id,
      })
    );
    dispatch(
      updateStandingAfterMatch({
        club1Id: state.id1,
        club2Id: state.id2,
        club1Goal: goal1,
        club2Goal: goal2,
      })
    );
    setIsSubmit(true)
    toast.success('C???p nh???t tr???n ?????u th??nh c??ng')
    // navigate(-1);
  };

  return (
    <Container>
      <h1 className="pt-5 mb-5">K???t qu??? thi ?????u</h1>
      <Row>
        <Col>
          ?????i 1: <b>{state.team1}</b>
        </Col>
        <Col>
          ?????i 2: <b>{state.team2}</b>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          T??? s???: <span>b???t bu???c</span>
          <input
            className="input-number"
            type="number"
            value={goal1}
            min={0}
            max={100}
            onChange={(e) => setGoal1(e.target.value)}
            disabled={isSubmit}
          />
          <input
            className="input-number"
            type="number"
            value={goal2}
            min={0}
            max={100}
            onChange={(e) => setGoal2(e.target.value)}
            disabled={isSubmit}
          />
        </Col>
        <Col>
          S??n: <b>{state.stadiumMatch}</b>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          Ng??y: <b>{state.date}</b>
        </Col>
        <Col>
          Gi???: <b>{state.time}</b>
        </Col>
      </Row>
      <hr />
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>C???u th???</th>
            <th>?????i</th>
            <th>Lo???i b??n th???ng</th>
            <th>Th???i ??i???m</th>
          </tr>
        </thead>
        <tbody>
          {goalScorer.map((goal, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{goal.name}</td>
                <td>{goal.team}</td>
                <td>{goal.type}</td>
                <td>{goal.time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Th??m c???u th??? ???? ghi b??n</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="team">
              <Form.Label>
                Ch???n c???u th??? <span>b???t bu???c</span>
              </Form.Label>
              <Form.Select
                // value={team}
                onChange={(e) => {
                  setIdPlayer(e.target.value);
                }}
              >
                {players &&
                  players.map((player) => {
                    return (
                      <option key={player._id} value={player._id}>
                        {player.playerName}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="type-goal">
              <Form.Label>
                Lo???i b??n th???ng <span>b???t bu???c</span>
              </Form.Label>
              <Form.Select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Th???i ??i???m <span>b???t bu???c</span>
              </Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="90"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ????ng
          </Button>
          <Button variant="primary" onClick={handleAddGoal}>
            Th??m
          </Button>
        </Modal.Footer>
      </Modal> */}
      {/* <Button
        className="me-4"
        variant="primary"
        onClick={() => {
          handleShow();
          setTeam(state.team1);
          dispatch(getPlayerByClubId({ clubId: state.id1 }));
        }}
        disabled={countTeam1 < goal1 ? false : true}
      >
        Th??m c???u th??? ghi b??n ?????i {state.team1}
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
          setTeam(state.team2);
          dispatch(getPlayerByClubId({ clubId: state.id2 }));
        }}
        disabled={countTeam2 < goal2 ? false : true}
      >
        Th??m c???u th??? ghi b??n ?????i {state.team2}
      </Button> */}
      {/* <Row className="text-center mt-5 pt-5">
        <Col col-3>
          <Button style={{ fontSize: 20 }} onClick={handleSubmitMatchDetails}>
            C???p nh???t k???t qu??? tr???n ?????u
          </Button>
        </Col>
      </Row> */}
      <Row className="text-center mt-2 pt-2">
        <Col>
          <Button
            href="/account/create-match-schedule"
            style={{ fontSize: 12 }}
          >
            Quay v??? trang l???ch thi ?????u
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
