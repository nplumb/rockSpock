//import React from "react";
import { connect } from "react-redux";
import * as scoreActions from "./redux/actions/keepScore";
import * as setWinnerImport from "./redux/actions/setWinnerAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
//import ResultsPrint from "./ResultsPrint.js";

function DetermineWinner(
    yourIndex,
    sheldonWeaponIndex,
    weapons,
    playerWin,
    actions
) {
    debugger;
    let result = "";
    let resultsString = [0, 0].toString();

    function InnerSelect() {
        if (yourIndex === null) {
            resultsString = ["5,5"].toString();
            result = "START";
            return "Select Your Weapon to Play!";
        }
        if (yourIndex === sheldonWeaponIndex) {
            resultsString = ["0,0"].toString();
            result = "TIE";
            return "Tie!!! ";
        } else if (playerWin[yourIndex].includes(sheldonWeaponIndex)) {
            resultsString = [yourIndex, sheldonWeaponIndex].toString();
            result = "ME";
            return "You Win! ";
        } else {
            resultsString = [sheldonWeaponIndex, yourIndex].toString();
            result = "SHELDON";
            return "Sheldon Wins! ";
        }
    }
    const winnerString = InnerSelect();

    actions.addResult(result);
    actions.setWinner(resultsString, winnerString);
    return;
}

DetermineWinner.propTypes = {
    yourWins: PropTypes.number.isRequired,
    sheldonWins: PropTypes.number.isRequired,
    ties: PropTypes.number.isRequired,
    resultsString: PropTypes.string,
    winner: PropTypes.string,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        yourWins: state.yourWins,
        sheldonWins: state.sheldonWins,
        ties: state.ties,
        resultsString: state.resultsString,
        winner: state.winner
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addResult: bindActionCreators(scoreActions.addResult, dispatch),
            setWinner: bindActionCreators(setWinnerImport.setWinner, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetermineWinner);
