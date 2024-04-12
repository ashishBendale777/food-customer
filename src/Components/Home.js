import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { addItem } from "../reduxwork/CartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  // AllDishes
  const [AllDishes, setAllDishes] = useState([]);

  // Add to Cart
  const dispatcher = useDispatch();
  
  // AlllDishes
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allfoods")
      .then((result) => {
        setAllDishes(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="main-container">
      <div className="contents-div">
      {/* AllDishes */}
      <Container>
        <Row>
          {AllDishes.map((food) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card className="all-cards">
                  <Card.Img
                    className="mimg"
                    src={`http://localhost:5000${food.FoodImage}`}
                  />
                  <Card.Body className="mbody">
                    <Card.Title className="mtitle">{food.FoodName}</Card.Title>
                    <Card.Text className="mtext">{food.FoodType}</Card.Text>
                    <Card.Text className="mtext">{food.FoodCategory}</Card.Text>
                    <div>
                      <Card.Subtitle className="msubtitle">
                        <LiaRupeeSignSolid /> {food.FoodPrice}
                      </Card.Subtitle>
                    </div>
                  </Card.Body>
                  <Card.Footer className="mfooter">
                    <Button
                      className="btn"
                      onClick={() => {
                        dispatcher(addItem(food));
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Home;
