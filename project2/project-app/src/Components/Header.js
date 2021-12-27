import React, {Component} from 'react';
import {FormControl, Navbar,Nav,Container,Button,Form} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import logo from "./logo.jpg";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "../Pages/Home";
import About_us from "../Pages/About us";
import Contacts from "../Pages/Contacts";
import Centers_of_help from "../Pages/Centers of help";
import Blog from "../Pages/Blog";


class Header extends Component {
    render() {
        return (
            <>


            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="50"
                            width="50"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/about us">О нас</Nav.Link>
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                            <Nav.Link href="/centers of help">Центры помощи</Nav.Link>
                            <Nav.Link href="/blog">Блог</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about us" component={About_us}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route exact path="/centers of help" component={Centers_of_help}/>
                    <Route exact path="/blog" component={Blog}/>

                </Switch>
            </Router>
                </>


        )
    }
}

export default Header;