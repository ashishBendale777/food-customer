import React, { useEffect, useState } from "react";
import "../CSS/Orders.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  // AllOrders
  const [AllOrders, setAllOrders] = useState([]);

  const navigator = useNavigate();

  // AlllOrders
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allorders")
      .then((result) => {
        setAllOrders(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function handleClick(){
    navigator("/orderdetails");
  }
  return (
    <div>
      <h4>Orders</h4>

      {/* AllOrders */}
      <Container>
        <Row>
          {AllOrders.map((order) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card>
                  <Card.Body>
                    {/* <Card.Title>{order.CustId}</Card.Title> */}
                    <Card.Text>{order.OrderDate}</Card.Text>
                    <Card.Text>{order.OrderTotalAmount}</Card.Text>
                    {/* <Card.Text>{order.FoodItems}</Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                    <button onClick={handleClick}>OrderDetails</button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Orders;
