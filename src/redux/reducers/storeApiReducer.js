//import initialState from "./initialState";
export default function storeApiReducer(
    state = {
        sheldonWeapon: null,
        sheldonWeaponIndex: null,
        yourWeapon: null,
        yourIndex: null,
        yourWins: 0,
        sheldonWins: 0,
        ties: 0
    },
    action
) {
    debugger;
    switch (action.type) {
        case "SET_STORE":
            return {
                ...state,
                sheldonWeapon: action.sheldonWeapon,
                sheldonWeaponIndex: action.sheldonWeaponIndex,
                yourWeapon: action.yourWeapon,
                yourIndex: action.yourIndex
                // switch (action.result) {
                //     case "ME":
                //          yourWins: state.yourWins + 1 ;
                //     case "SHELDON":
                //        state.sheldonWins + 1 ;
                //     case "TIE":
                //         ties: state.ties + 1 ;
                // }
            };

        default:
            return state;
    }
}
