import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    table: {
        minWidth: 450
    }
});

function ShowScore(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Score Board">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <b>Your Wins</b>
                        </TableCell>
                        <TableCell align="left">
                            <b>Sheldon's Wins</b>
                        </TableCell>
                        <TableCell align="left">
                            <b>Ties</b>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">{props.yourWins}</TableCell>
                        <TableCell align="left">{props.sheldonWins}</TableCell>
                        <TableCell align="left">{props.ties}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

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
