import React, { useEffect} from "react";
// import CardItem from "./CardItem/CardItem";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/userSlice";

const Users = (props) => {
  const dispatch = useDispatch();
  // ctreat state for the selected categures in filter
const usersState = useSelector((state)=> state.users)

useEffect(() => {

dispatch(fetchUsers())

}, [dispatch]);

if(usersState.loading){
  return <h1>Loading...</h1>
}

if(usersState.error){
  return <h1>Error : {usersState.error}</h1>
}

  return (
    <>
       <Container>
      <Row>
        <Col>
          <Table striped bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Maiden Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usersState.users.map((user, key) => (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.maidenName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Users;
