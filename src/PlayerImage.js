import React from "react";
import { connect } from "react-redux";
import spock from "./images/spock.svg";
import lizard from "./images/lizard.svg";
import rock from "./images/rock.svg";
import paper from "./images/paper.svg";
import scissors from "./images/Scissors.svg";
import PropTypes from "prop-types";

const PlayerImage = (props) => {
    return (
        <img
            className="SelectedItem"
            src={
                props.yourWeapon === "Rock"
                    ? rock
                    : props.yourWeapon === "Scissors"
                    ? scissors
                    : props.yourWeapon === "Spock"
                    ? spock
                    : props.yourWeapon === "Lizard"
                    ? lizard
                    : paper
            }
            alt="rock paper scissor"
            width={250}
            height={300}
            mode="fit"
        />
    );
};

PlayerImage.propTypes = {
    yourWeapon: PropTypes.string,
    yourIndex: PropTypes.number
};

function mapStateToProps(state) {
    return {
        yourWeapon: state.determineWinnerReduce.yourWeapon,
        yourIndex: state.determineWinnerReduce.yourIndex
    };
}

export default connect(mapStateToProps)(PlayerImage);
