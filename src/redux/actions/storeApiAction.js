export function setStore(
    sheldonWeapon,
    sheldonWeaponIndex,
    yourWeapon,
    yourIndexresult,
    resultsTest,
    winner
) {
    return {
        type: "SET_STORE",
        sheldonWeapon,
        sheldonWeaponIndex,
        yourWeapon,
        yourIndexresult,
        resultsTest,
        winner
    };
}
