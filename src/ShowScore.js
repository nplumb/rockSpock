import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MaterialTable from "material-table";

const ShowScore = (props) => {
    return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                columns={[
                    { title: "Your Wins Total", field: "yourTotal" },
                    { title: "Sheldon's Wins Total", field: "sheldonTotal" },
                    { title: "Ties Total", field: "tiesTotal" }
                ]}
                data={[
                    {
                        yourTotal: props.yourWins,
                        sheldonTotal: props.sheldonWins,
                        tiesTotal: props.ties
                    }
                ]}
                title="Score Board"
            />
        </div>
    );
};

ShowScore.propTypes = {
    yourWins: PropTypes.number,
    sheldonWins: PropTypes.number,
    ties: PropTypes.number
};

function mapStateToProps(state) {
    return {
        yourWins: state.scoreReduce.yourWins,
        sheldonWins: state.scoreReduce.sheldonWins,
        ties: state.scoreReduce.ties
    };
}

export default connect(mapStateToProps)(ShowScore);
