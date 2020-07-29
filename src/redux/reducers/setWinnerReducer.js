//import initialState from "./initialState";
export default function setWinnerReducer(
    state = {
        resultsTest: [5, 5].toString(),
        winner: "Select Your Weapon to Play!"
    },
    action
) {
    debugger;
    switch (action.type) {
        case "SET_WINNER":
            return {
                ...state,
                resultsTest: action.resultsTest,
                winner: action.winner
            };

        default:
            return state;
    }
}
