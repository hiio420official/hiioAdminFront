import {BaseThemeType} from "../types/styles";

export const BaseTheme: BaseThemeType = {
    colors: {
        bludMosque: "#007ba5",
        directGreen: "#309024",
        calypso: "#31a9c1",
        slickBlue: "#7ac8dc",
        extraWhite: "#eff0eb",
        kiwi: "#47d4b2",
        tricornBlack: "#2d2d2d",
        nervyHue: "#d0ce57",
        ionian: "#38897a",
        bluePeacock: "#00494f",
        get main() {
            return this.directGreen;
        },
        get submit() {
            return this.bludMosque;
        },

    }
};