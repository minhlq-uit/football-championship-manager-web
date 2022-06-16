import React from "react";
import { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStanding } from "../../redux/features/standingSlice";
export default function Standings() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const { standing } = useSelector(state => state.standing)
  useEffect(() => {
    dispatch(getStanding({}))
  }, []);
  useEffect(() => {
    if(standing) {
      setData(standing)
    }
  }, [standing])
  return (
    <Container>
      <h1 className="pt-5 mb-3">Bảng xếp hạng</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Đội</th>
            <th>Thắng</th>
            <th>Hòa</th>
            <th>Thua</th>
            <th>Hiệu số</th>
            <th>Hạng</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{item.clubId.fullName}</td>
                <td>{item.win}</td>
                <td>{item.drawn}</td>
                <td>{item.lose}</td>
                <td>{item.goalDifference}</td>
                <td>{item.rank}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button className="mt-5">Quay về trang chủ</Button>
    </Container>
  );
}
