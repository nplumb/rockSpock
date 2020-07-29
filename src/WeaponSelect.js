import React from "react";
import { connect } from "react-redux";
import {
    FaHandRock,
    FaHandScissors,
    FaHandPaper,
    FaHandLizard,
    FaHandSpock
} from "react-icons/fa";
import { Row, Button, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";
import * as scoreActions from "./redux/actions/keepScore";
import * as setWinnerImport from "./redux/actions/setWinnerAction";
import * as determineWinner from "./redux/actions/determineWinnerAction";
import { bindActionCreators } from "redux";

const WeaponsSelect = (props) => {
    const handleClick = (weaponValue) => {
        // let yourIndexV = null;
        // let yourWeaponV = "";
        // let sheldonWeaponIndexV = 0;
        // let sheldonWeaponV = "";
        const playerWin = [
            [2, 3],
            [0, 4],
            [1, 3],
            [1, 4],
            [0, 2]
        ];
        const weapons = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

        let yourIndexV = weaponValue;
        let yourWeaponV = weapons[weaponValue];
        var sheldonWIndex = Math.floor(Math.random() * weapons.length);
        let sheldonWeaponIndexV = sheldonWIndex;
        let sheldonWeaponV = weapons[sheldonWIndex];

        debugger;
        let result = "";
        let resultsString = [0, 0].toString();

        function InnerSelect() {
            debugger;
            if (yourIndexV === null) {
                resultsString = ["5,5"].toString();
                result = "START";
                return "Select Your Weapon to Play!";
            }
            if (yourIndexV === sheldonWeaponIndexV) {
                resultsString = ["0,0"].toString();
                result = "TIE";
                return "Tie!!! ";
            } else if (playerWin[yourIndexV].includes(sheldonWeaponIndexV)) {
                resultsString = [yourIndexV, sheldonWeaponIndexV].toString();
                result = "ME";
                return "You Win! ";
            } else {
                resultsString = [sheldonWeaponIndexV, yourIndexV].toString();
                result = "SHELDON";
                return "Sheldon Wins! ";
            }
        }
        const theWinner = InnerSelect();

        props.actions.addResult(result);
        debugger;
        props.actions.setWinner(resultsString, theWinner);
        props.actions.determineWinner(
            sheldonWeaponV,
            sheldonWeaponIndexV,
            yourWeaponV,
            yourIndexV
        );
    };

    return (
        <Row className="flex-center">
            <ButtonToolbar aria-label="Toolbar with buttons">
                <Button
                    type="button"
                    onClick={() => handleClick(0)}
                    variant="dark"
                    className="mr-2"
                >
                    <FaHandRock size={42} fill="#ff0000" />
                </Button>
                <Button
                    type="button"
                    onClick={() => handleClick(1)}
                    variant="dark"
                    className="mr-2"
                >
                    <FaHandPaper size={42} fill="#ff0000" />
                </Button>
                <Button
                    type="button"
                    onClick={() => handleClick(2)}
                    variant="dark"
                    className="mr-2"
                >
                    <FaHandScissors size={42} fill="#ff0000" />
                </Button>
                <Button
                    type="button"
                    onClick={() => handleClick(3)}
                    variant="dark"
                    className="mr-2"
                >
                    <FaHandLizard size={42} fill="#ff0000" />
                </Button>
                <Button
                    type="button"
                    onClick={() => handleClick(4)}
                    variant="dark"
                >
                    <FaHandSpock size={42} fill="#ff0000" />
                </Button>
            </ButtonToolbar>
        </Row>
    );
};

WeaponsSelect.propTypes = {
    resultsTest: PropTypes.string,
    winner: PropTypes.string,
    sheldonWeapon: PropTypes.string,
    sheldonWeaponIndex: PropTypes.number,
    yourWeapon: PropTypes.string,
    yourIndex: PropTypes.number,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        resultsTest: state.winnerReduce.resultsTest,
        winner: state.winnerReduce.winner,
        sheldonWeapon: state.determineWinnerReduce.sheldonWeapon,
        sheldonWeaponIndex: state.determineWinnerReduce.sheldonWeaponIndex,
        yourWeapon: state.determineWinnerReduce.yourWeapon,
        yourIndex: state.determineWinnerReduce.yourIndex
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addResult: bindActionCreators(scoreActions.addResult, dispatch),
            setWinner: bindActionCreators(setWinnerImport.setWinner, dispatch),
            determineWinner: bindActionCreators(
                determineWinner.determineWinner,
                dispatch
            )
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeaponsSelect);
