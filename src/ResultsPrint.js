import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function ResultsPrint(props) {
    debugger;
    console.log(props.resultsTest);
    console.log("winner = " + props.winner);
    const weapons = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

    function switching() {
        debugger;
        switch (props.resultsTest) {
            case "0,0":
                return "Back to the pit!";
            case "0,3":
                return `${weapons[0]} crushes ${weapons[3]}!`;
            case "0,2":
                return `${weapons[0]} crushes ${weapons[2]}!`;
            case "1,0":
                return `${weapons[1]} covers ${weapons[0]}!`;
            case "1,4":
                return `${weapons[1]} disproves ${weapons[4]}!`;
            case "2,1":
                return `${weapons[2]} cuts ${weapons[1]}!`;
            case "2,3":
                return `${weapons[2]} decapitates ${weapons[3]}!`;
            case "3,4":
                return `${weapons[3]} poisons ${weapons[4]}!`;
            case "3,1":
                return `${weapons[3]} eats ${weapons[1]}!`;
            case "4,2":
                return `${weapons[4]} smashes ${weapons[2]}!`;
            case "4,0":
                return `${weapons[4]} vaporizes ${weapons[0]}!`;
            case "5,5":
                return ` Good Luck!`;
            default:
                return "Something has gone terribly wrong...";
        }
    }
    const statement = switching();
    return <h4>{props.winner + statement}</h4>;
}

ResultsPrint.propTypes = {
    resultsTest: PropTypes.string,
    winner: PropTypes.string
};

function mapStateToProps(state) {
    debugger;
    return {
        resultsTest: state.winnerReduce.resultsTest,
        winner: state.winnerReduce.winner
    };
}

export default connect(mapStateToProps)(ResultsPrint);
