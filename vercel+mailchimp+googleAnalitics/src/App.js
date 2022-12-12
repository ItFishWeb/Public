
import './App.css';
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import{ About} from "./components/About"
import {Contact} from "./components/Contact"
import {Home} from "./components/Home"
import {Footer} from "./components/Footer"
import ReactGA from 'react-ga';
function App() {
  useEffect(() => {

    ReactGA.initialize('UA-228120154-1');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })
  return (
    <BrowserRouter>
    <div className="App">
               <Navbar sticky="top" bg="black" variant="dark" expand="lg">
    <Container fluid>
    <div className="col-lg-2"></div>
    <Navbar.Brand href="/">WsBCars</Navbar.Brand>
    <div className="col-lg-5"></div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav
      data-testid="navbar"
        className="me-auto my-2 my-lg-2"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/"} id="navLink" data-testid="home-link">Strona Główna</Nav.Link>
        <Nav.Link as={Link} to={"/about"} href="#about" id="navLink" data-testid="about-link">Oferta</Nav.Link>
        <Nav.Link as={Link} to={"/contact"} href="" id="navLinkLast" data-testid="contact-link">Kontakt</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div>
  <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Footer/>}/>
  </Routes>
</div>
 </div>
 </BrowserRouter>
  );
}

export default App;
