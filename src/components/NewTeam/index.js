import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewClub, clearClub } from "../../redux/features/clubSlice";
import {
  createNewStadium,
  clearStadium,
} from "../../redux/features/stadiumSlice";
import { createNewPlayer, clearPlayer } from "../../redux/features/playerSlice";
import { createNewClubToStanding } from "../../redux/features/standingSlice";
import {
  updateParameter,
  getParameterById,
} from "../../redux/features/parameterSlice";
import { Container, Table, Form, Button } from "react-bootstrap";
import moment from "moment";
import { toast } from "react-toastify";
import "./newteam.css";
export default function NewTeam() {
  const [players, setPlayers] = useState([]);
  const [nameClub, setNameClub] = useState("");
  const [nameStadium, setNameStadium] = useState("");
  const [status, setStatus] = useState(0);

  const [minPlayerOfTeam, setMinPlayerOfTeam] = useState();
  const [minAge, setMinAge] = useState();

  useEffect(() => {
    console.log("players", players);
  }, [players]);
  useEffect(() => {
    dispatch(getParameterById({ parameterId: "62a410ce7b4c32b6a6636cfa" }));
    dispatch(getParameterById({ parameterId: "62a410f07b4c32b6a6636cfe" }));
  }, []);
  const { parameterMinAge, parameterMinPlayerOfTeam } = useSelector(
    (state) => state.parameter
  );
  useEffect(() => {
    if (parameterMinAge) {
      setMinAge(parameterMinAge);
    }
  }, [parameterMinAge]);
  useEffect(() => {
    if (parameterMinPlayerOfTeam) {
      setMinPlayerOfTeam(parameterMinPlayerOfTeam);
    }
  }, [parameterMinPlayerOfTeam]);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [type, setType] = useState(0);

  const dispatch = useDispatch();
  const { stadium } = useSelector((state) => state.stadium);
  const { club } = useSelector((state) => state.club);

  const addNewData = () => {
    let birthYear = birth[0] + birth[1] + birth[2] + birth[3];
    let dateNow = new Date();
    let yearNow = dateNow.getFullYear();
    if (yearNow - birthYear < 16) {
      toast.error("C???u th??? ch??a ????? tu???i");
      return;
    }
    if (yearNow - birthYear > 40) {
      toast.error("C???u th??? ???? qu?? tu???i");
      return;
    }
    if (name === "") {
      toast.error("Vui l??ng ??i???n ?????y ????? th??ng tin");
      return;
    }
    setPlayers([
      ...players,
      {
        name,
        birth: moment(birth).format("DD/MM/YYYY"),
        type: type,
      },
    ]);
    setName("");
    setBirth("");
    setType("");
    toast.success("Th??m c???u th??? th??nh c??ng");
  };
  const handleSubmit = () => {
    let check = 0;
    players.forEach((player) => {
      if (player.type === 1) {
        check += 1;
      }
    });
    if (check > 3) {
      setStatus(1);
      toast.error("C???u th??? n?????c ngo??i v?????t qu?? s??? l?????ng cho ph??p");
      return;
    }
    if (players.length < minPlayerOfTeam) {
      setStatus(1);
      toast.error("S??? c???u th??? t???i thi???u kh??ng ?????");
      return;
    } else if (players.length > 22) {
      setStatus(1);
      toast.error("V?????t qu?? s??? c???u th??? t???i ??a");
      return;
    }
    if (nameClub === "" || nameStadium === "") {
      setStatus(1);
      toast.error("Vui l??ng ??i???n ?????y ????? th??ng tin");
      return;
    }
    if (!status) {
      dispatch(createNewStadium({ name: nameStadium }));
    }
  };
  useEffect(() => {
    if (stadium && !status) {
      dispatch(createNewClub({ name: nameClub, stadiumId: stadium._id }));
    }
  }, [stadium]);
  useEffect(() => {
    if (club && !status) {
      players.forEach((player) => {
        club
          ? dispatch(
              createNewPlayer({
                name: player.name,
                birth: player.birth,
                type: player.type,
                clubId: club._id,
              })
            )
          : dispatch(
              createNewPlayer({
                name: player.name,
                birth: player.birth,
                type: player.type,
              })
            );
      });
      dispatch(createNewClubToStanding({ clubId: club._id }));

      setNameClub("");
      setNameStadium("");
      setPlayers([]);

      dispatch(clearStadium());
      dispatch(clearClub());
      dispatch(clearPlayer());

      toast.success("Th??m h??? s?? ?????i b??ng th??nh c??ng");
      setStatus(0);
    }
  }, [club]);
  const handleToUpdate = (idx) => {
    setName(players[idx].name);
    setBirth(players[idx].birth);
    setType(players[idx].type);
  };
  const handleToDelete = (idx) => {
    players.splice(idx, 1);
    console.log("players", players);
  };
  return (
    <Container className="pt-3">
      <h1 className="text-center">H??? S?? ?????i B??ng</h1>
      <Form>
        <Form.Group className="mb-3" controlId="ten-doi">
          <Form.Label>
            T??n ?????i <span>b???t bu???c</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="exam"
            value={nameClub}
            onChange={(e) => setNameClub(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="san-nha">
          <Form.Label>
            S??n nh?? <span>b???t bu???c</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="exam"
            value={nameStadium}
            onChange={(e) => setNameStadium(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>C???u th???</th>
            <th>Ng??y sinh</th>
            <th>Lo???i c???u th???</th>
            <th>Ghi ch??</th>
            <th>H??nh ?????ng</th>
          </tr>
        </thead>
        <tbody>
          {players.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.birth}</td>
                <td>{item.type ? "Ngo??i n?????c" : "Trong n?????c"}</td>
                <td></td>
                <td className="d-flex justify-content-around">
                  <i
                    className="fa-solid fa-pencil"
                    onClick={() => handleToUpdate(index)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => handleToDelete(index)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="ten-cau-thu">
          <Form.Label>
            T??n c???u th??? <span>b???t bu???c</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="T??n c???u th???"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ngay-sinh">
          <Form.Label>
            Ng??y sinh <span>b???t bu???c</span>
          </Form.Label>
          <Form.Control
            type="date"
            placeholder="01/01/2001"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Ch???n lo???i c???u th??? <span>b???t bu???c</span>
          </Form.Label>
          <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="0">Trong n?????c</option>
            <option value="1">Ngo??i n?????c</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={addNewData}>
          Th??m c???u th???
        </Button>
      </Form>

      <div className="text-center mt-5">
        <Button className="mt-5" onClick={handleSubmit}>
          N???p h??? s??
        </Button>
      </div>
    </Container>
  );
}
