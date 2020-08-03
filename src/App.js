import React from "react";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import WeaponsSelect from "./WeaponSelect.js";
import ResultsPrint from "./ResultsPrint";
import SheldonImage from "./SheldonImage";
import PlayerImage from "./PlayerImage";
import ShowScore from "./ShowScore";

const App = () => {
    return (
        <Container id="top-container">
            <div className="BBTGame">
                <div className="header">
                    <b style={{ fontSize: 40 }}>
                        Rock, Paper, Scissors, Lizard, Spock
                    </b>
                </div>
                <div className="body">
                    <div className="left">
                        <div className="top">
                            <p>
                                <b>Your Weapon</b>
                            </p>
                        </div>
                        <div className="bottom">
                            <PlayerImage />
                        </div>
                    </div>

                    <div className="right">
                        <div className="top">
                            <p>
                                <b>Sheldon's Weapon</b>
                            </p>
                        </div>
                        <div className="bottom">
                            <SheldonImage />
                        </div>
                    </div>
                </div>

                <div>
                    <ResultsPrint />
                </div>

                <div className="Choose">
                    <b>Choose Your Weapon to begin!</b>
                    <Row>
                        <Col>
                            <WeaponsSelect />
                        </Col>
                    </Row>
                </div>

                <div>
                    <ShowScore />
                </div>
            </div>
        </Container>
    );
};

export default App;
