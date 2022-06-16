import React from "react";
import { useState, useEffect } from "react";
import { Container, Table, Button, NavItem } from "react-bootstrap";
import { getAllPlayer } from "../../redux/features/playerSlice";
import { getAllClub } from "../../redux/features/allClubSlice";
import { getGoalByPlayerId } from "../../redux/features/goalSlice";
import { useDispatch, useSelector } from "react-redux";
import goal from "../../services/goal";
export default function AllPlayer() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { allClub } = useSelector((state) => state.allClub);

  useEffect(() => {
    dispatch(getAllClub({}));
  }, []);

  useEffect(() => {
    if (allClub) {
      setData(allClub);
    }
  }, [allClub]);

  return (
    <Container>
      <h1 className="pt-5 mb-3">Danh sách các câu lạc bộ</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên đội</th>
            <th>Tên sân</th>
            {/* <th>Đội</th>
            <th>Loại cầu thủ</th>
            <th>Tổng số bàn thắng</th> */}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.fullName}</td>
                  <td>{item.stadiumId.name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Button className="mt-5">Quay về trang chủ</Button>
    </Container>
  );
}
