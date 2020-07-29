import React from "react";
import { connect } from "react-redux";
import spock from "./images/spock.svg";
import lizard from "./images/lizard.svg";
import rock from "./images/rock.svg";
import paper from "./images/paper.svg";
import scissors from "./images/Scissors.svg";
import PropTypes from "prop-types";

const SheldonImage = (props) => {
    return (
        <img
            className="SelectedItem"
            src={
                props.sheldonWeapon === "Rock"
                    ? rock
                    : props.sheldonWeapon === "Scissors"
                    ? scissors
                    : props.sheldonWeapon === "Spock"
                    ? spock
                    : props.sheldonWeapon === "Lizard"
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

SheldonImage.propTypes = {
    sheldonWeapon: PropTypes.string,
    sheldonWeaponIndex: PropTypes.number
};

function mapStateToProps(state) {
    return {
        sheldonWeapon: state.determineWinnerReduce.sheldonWeapon,
        sheldonWeaponIndex: state.determineWinnerReduce.sheldonWeaponIndex
    };
}

export default connect(mapStateToProps)(SheldonImage);
