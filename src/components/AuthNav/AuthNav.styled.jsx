import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWhiteLink = styled(Link)`
border: 2px solid #F59256;
color: black;
font-weight: 500;
padding: 8px 28px;
border-radius: 40px;
font-size: 14px;
line-height: calc(19 / 14);
letter-spacing: 0.04em;
`

export const StyledColoredLink = styled(Link)`
background-color: #F59256;
color: white;
font-weight: 500;
padding: 8px 28px;
border-radius: 40px;
font-size: 14px;
line-height: calc(19 / 14);
letter-spacing: 0.04em;
display: flex;
align-items: center;
`

export const StyledSpan = styled.span`
display: flex;
margin-right: 12px;
fill: #F59256;
`

export const UnregiteredUser = styled.div`
display: flex;
gap: 12px;
justify-content: center;
`