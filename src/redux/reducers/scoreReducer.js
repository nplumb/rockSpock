//import initialState from "./initialState";

export default function scoreReducer(
    state = { yourWins: 0, sheldonWins: 0, ties: 0 },
    action
) {
    debugger;
    switch (action.type) {
        case "ADD_RESULT":
            switch (action.result) {
                case "START":
                    return state;
                case "ME":
                    return { ...state, yourWins: state.yourWins + 1 };
                case "SHELDON":
                    return { ...state, sheldonWins: state.sheldonWins + 1 };
                case "TIE":
                    return { ...state, ties: state.ties + 1 };
                default:
                    return state;
            }

        default:
            return state;
    }
}
