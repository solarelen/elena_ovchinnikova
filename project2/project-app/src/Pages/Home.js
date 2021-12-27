import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox"
import {Container, Card, Button, CardGroup} from "react-bootstrap";


class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4">Об аутизме</h2>
                <CardGroup className="m-4">
                    <Card bg="info" border="success">
                        <Card.Img variant="top"
                                  src="https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5f2e7bf59db0e919c66fa190_5f2e7c1a7845492a2be63948/scale_1200"
                                  />
                        <Card.Body>
                            <Card.Title>Признаки</Card.Title>
                            <Card.Text>
                                Диагноз не ставится по одному признаку.
                            </Card.Text>
                            <Button variant="primary">О признаках</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="info" border="success">

                        <Card.Body>

                            <Card.Title>Причины</Card.Title>
                            <Card.Text>
                                Причины аутизма недостаточно ясны.
                            </Card.Text>
                            <Button variant="primary">Теории происхождения аутизма</Button>
                        </Card.Body>
                        <Card.Img variant="top"
                                  src="https://s1.slide-share.ru/s_slide/c8a22419d4554e4ed2da2762879c9e95/a00802f7-106b-41ef-8675-3a8c9d852f15.jpeg"
                        />
                    </Card>

                    <Card bg="info" border="success">
                        <Card.Img variant="top"
                                  src="https://psyfiles.ru/wp-content/uploads/1/d/9/1d904174ab36a2f7564df92a15672dda.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Методы коррекции аутизма</Card.Title>
                            <Card.Text>
                               От аутизма нет лекарства.
                            </Card.Text>
                            <Button variant="primary">Спорные и нетрадиционные методики коррекции при аутизме</Button>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </Container>
                </>

        );
    }
}

export default Home;