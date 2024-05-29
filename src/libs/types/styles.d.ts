export type BaseThemeType = {
    colors:ColorType
}

type ColorType = {
    bludMosque:string,
    directGreen:string,
    calypso:string,
    slickBlue:string,
    extraWhite:string,
    kiwi:string,
    tricornBlack:string,
    nervyHue:string,
    ionian:string,
    bluePeacock:string,
    main:string,
    submit:string
}



export interface PropsType{
    cursor?:string;
    color?:string;
    border?:string;
    borderRadius?:string;
    padding?:string;
}