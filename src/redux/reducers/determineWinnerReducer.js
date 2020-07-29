//import initialState from "./initialState";
export default function determineWinnerReducer(
    state = {
        sheldonWeapon: null,
        sheldonWeaponIndex: null,
        yourWeapon: null,
        yourIndex: null
    },
    action
) {
    debugger;
    switch (action.type) {
        case "PICK_WINNER":
            return {
                ...state,
                sheldonWeapon: action.sheldonWeapon,
                sheldonWeaponIndex: action.sheldonWeaponIndex,
                yourWeapon: action.yourWeapon,
                yourIndex: action.yourIndex
            };

        default:
            return state;
    }
}
