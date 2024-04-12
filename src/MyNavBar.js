import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CSS/MyNavBar.css";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const MyNavBar = () => {
  const [theme, settheme] = useState(false);

  const handleClick = () => {
    {
      settheme(!theme);
    }
  };

  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <div>
      <Navbar className="containers" expand="lg">
        {/* // sticky='top' fixed='top'  */}
        {theme ? (
          <CiLight color="white" onClick={handleClick} />
        ) : (
          <MdOutlineDarkMode onClick={handleClick} />
        )}

        <Container className="contents">
          <Navbar.Brand className="nav-brand">Customer</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-bar" />
          <Navbar.Collapse id="nav-bar" className="contains">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="navlink" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navlink" to="/foods">
                  Foods
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navlink" to="/aboutus">
                  AboutUs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navlink" to="/profile">
                  Profile
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navlink" to="/cart">
                  Cart
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navlink" to="/orders">
                  Orders
                </Link>
              </Nav.Link>
            </Nav>

            <div className="nav-btns">
              <Link className="nlink" to={"/login"}>
                Login
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
