import {PropsType} from "../../types";
import {ThemeProvider} from "styled-components";
import {BaseTheme} from "../../styles/Theme";

export default function GlobalProvider({children}: PropsType) {
    return <ThemeProvider theme={BaseTheme}>
        {children}
    </ThemeProvider>
}