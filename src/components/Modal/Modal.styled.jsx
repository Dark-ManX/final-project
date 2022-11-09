import styled from "styled-components";

export const ModalBackdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
`

export const ModalBody = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -45vh);
background-color: white;
border-radius: 25px;
padding: 0;
margin: 100px auto;
overflow: hidden;
`