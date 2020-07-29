export function determineWinner(
    sheldonWeapon,
    sheldonWeaponIndex,
    yourWeapon,
    yourIndex
) {
    return {
        type: "PICK_WINNER",
        sheldonWeapon,
        sheldonWeaponIndex,
        yourWeapon,
        yourIndex
    };
}
