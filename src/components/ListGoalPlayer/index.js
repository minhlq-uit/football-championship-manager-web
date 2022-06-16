import React from "react";
import { useState, useEffect } from "react";
import { Container, Table, Button, NavItem } from "react-bootstrap";
import { getAllPlayer } from "../../redux/features/playerSlice";
import { getGoalByPlayerId } from "../../redux/features/goalSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../more/Loading";
import player from "../../services/player";
export default function AllPlayer() {
  const [data, setData] = useState([]);
  const [listGoal, setListGoal] = useState([]);
  const dispatch = useDispatch();
  const { players } = useSelector((state) => state.player);
  const { goals } = useSelector((state) => state.goal);
  const [isLoading, setIsLoading] = useState(true);
  let numberHasGoal = 0

  useEffect(() => {
    dispatch(getAllPlayer({}));
  }, []);

  useEffect(() => {
    setData(players);
  }, [players]);
  useEffect(() => {
    if (data) {
      data.forEach((item) => {
        dispatch(getGoalByPlayerId({ playerId: item._id }));
      });
    }
  }, [data]);
  useEffect(() => {
    if (goals) {
      setListGoal([...listGoal, goals.length]);
    }
  }, [goals]);
  useEffect(() => {
    if(data) {
      if (data.length !== listGoal.length) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [listGoal])
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <h1 className="pt-5 mb-3">Danh sách cầu thủ ghi bàn</h1>
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
              {data &&
                data.length === listGoal.length &&
                data.map((item, index) => {
                  if(listGoal[index]) {
                    numberHasGoal = numberHasGoal + 1
                    return (
                      <tr key={index}>
                        <td>{numberHasGoal}</td>
                        <td>{item.playerName}</td>
                        <td>{item.clubId.fullName}</td>
                        <td>
                          {item.nationality == 1 ? "Ngoài nước" : "Trong nước"}
                        </td>
                        <td>{listGoal[index]}</td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </Table>
          <Button className="mt-5">Quay về trang chủ</Button>
        </Container>
      )}
    </>
  );
}
