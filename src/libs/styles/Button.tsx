import styled from "styled-components";
import {PropsType} from "../types/styles";

export const SBtnBase = styled.button<PropsType>`
    border:none;
    padding:${props=>props.padding?props.padding:"4px 16px"};
    cursor:${props=>props.cursor?props.cursor:"pointer"};
`
export const SBtnSubmit = styled(SBtnBase)<PropsType>`
    background-color:${props=>props.theme.colors.submit};
    color:${props=>props.color?props.color:"white"};
    border-radius: ${props=>props.borderRadius?props.borderRadius:"8px"};
`