import React, {Component} from 'react';
import {about, content} from "../App.css";
import {Container,Tab,Nav,Row,Col} from "react-bootstrap";
import pic2 from "../assets/pic2.png";
class AboutUs extends Component {
    render() {
        return (
           <Container>
               <Tab.Container id="ledt-tab-example" defaultActiveKey="first">
                   <Row>
                       <Col sm={3}>
                           <Nav variant="pills" className="about" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">О проекте</Nav.Link>
                                </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="second">Цели</Nav.Link>
                               </Nav.Item>
                               <Nav.Item>
                                   <Nav.Link eventKey="third">Принципы</Nav.Link>
                               </Nav.Item>
                               </Nav>
                       </Col>
                               <Col sm={9}>
                                   <Tab.Content className="content">
                                       <Tab.Pane eventKey="first">
                                           <img src={pic2}/>


                                       </Tab.Pane>
                                       <Tab.Pane eventKey="second">

                                           <img src="https://ds05.infourok.ru/uploads/ex/0220/000063c7-9083ec6f/img1.jpg"/>


                                       </Tab.Pane>
                                       <Tab.Pane eventKey="third">
                                           <img src="https://fsd.multiurok.ru/html/2018/01/30/s_5a70b70b113b5/img4.jpg"/>


                                       </Tab.Pane>
                                   </Tab.Content>
                               </Col>


                   </Row>

               </Tab.Container>
           </Container>
        );
    }
}

export default AboutUs;