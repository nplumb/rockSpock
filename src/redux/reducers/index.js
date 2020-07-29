import { combineReducers } from "redux";
import scoreReduce from "./scoreReducer";
import winnerReduce from "./setWinnerReducer";
import determineWinnerReduce from "./determineWinnerReducer";

const rootReducer = combineReducers({
    scoreReduce,
    winnerReduce,
    determineWinnerReduce
});

export default rootReducer;
