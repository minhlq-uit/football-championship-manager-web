import React from "react";
import { useState, useEffect } from "react";
import { Container, Table, Button, NavItem } from "react-bootstrap";
import { getAllPlayer } from "../../redux/features/playerSlice";
import { getGoalByPlayerId } from "../../redux/features/goalSlice";
import { useDispatch, useSelector } from "react-redux";
import goal from "../../services/goal";
export default function AllPlayer() {
  const [data, setData] = useState([]);
  const [listGoal, setListGoal] = useState([]);
  const dispatch = useDispatch();
  const { players } = useSelector((state) => state.player);
  const { goals } = useSelector((state) => state.goal);

  useEffect(() => {
    dispatch(getAllPlayer({}));
  }, []);

  useEffect(() => {
    setData(players);
  }, [players]);
  useEffect(() => {
    if (players) {
      players.forEach((item) => {
        dispatch(getGoalByPlayerId({ playerId: item._id }));
      });
    }
  }, [players]);
  useEffect(() => {
    if (goals) {
      setListGoal([...listGoal, goals.length]);
    }
  }, [goals]);
  return (
    <Container>
      <h1 className="pt-5 mb-3">Danh sách cầu thủ</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Cầu thủ</th>
            <th>Đội</th>
            <th>Loại cầu thủ</th>
            <th>Tổng số bàn thắng</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length === listGoal.length &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.playerName}</td>
                  <td>{item.clubId.fullName}</td>
                  <td>{item.nationality == 1 ? "Ngoài nước" : "Trong nước"}</td>
                  <td>{listGoal[index]}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Button className="mt-5">Quay về trang chủ</Button>
    </Container>
  );
}
