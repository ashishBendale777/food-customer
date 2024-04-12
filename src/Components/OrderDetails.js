import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const OrderDetails = () => {
  // AllOrders
  const [AllOrders, setAllOrders] = useState([]);

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
  return (
    <div>
      <h4>OrderDetails</h4>

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
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default OrderDetails;
