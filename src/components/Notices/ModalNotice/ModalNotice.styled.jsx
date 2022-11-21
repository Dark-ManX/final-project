import styled from "styled-components";

export const Container = styled.div`
`

export const Description = styled.div`
     margin-bottom: 20px;
    
    @media screen and (min-width: 768px){
        display: flex;
    }
`
export const CardImageContainer = styled.div`
    position: relative;
    margin-bottom: 16px;
`

export const Photo = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 0px 0px 40px 40px;
    display: flex;
    
    @media screen and (min-width: 768px) {
        width: 288px;
        height: 328px;
        margin-right: 20px;
        margin-bottom: 0px;
    }

    @media screen and (min-width: 1280px) {
       
    }
`

export const Category = styled.p`
    position: absolute;
    top: 20px;
    left: 0;
    padding: 6px 50px 7px 20px;
    margin: 0;

    text-align: center;
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: #111111;
    background: rgba(255, 255, 255, 0.6);
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;

    @media screen and (min-width: 1280px) {
        padding: 6px 53px 6px 20px;
        line-height: 1.3;
    }
`

export const InfoContainer = styled.div`
    width: 240px;

    @media screen and (min-width: 768px){
        width: 356px;
    }
`

export const Title = styled.h3`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.35;
    letter-spacing: -0.01em;
    color: #000000;
`

export const Info = styled.div`
    display: flex;
`

export const InfoKey = styled.div`
    min-width: 50%;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.4;
    color: #000000;
    @media screen and (min-width: 768px) {
        min-width: 40%;
    }
`

export const InfoValue = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    color: #000000;
`

export const Comments = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        margin-bottom: 32px;
    }
`

export const Span = styled.span`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5px;
    letter-spacing: 0.04em;
    color: #000000;
`

export const CloseModal = styled.button`
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  right: 20px;
  top: 20px;
  border-radius: 50%;
  align-items: center;
`

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: 768px){
        flex-direction: unset;
        justify-content: end;
            
    }
`

export const ButtonAdd = styled.button`
    width: 100%;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid #F59256;
    border-radius: 40px;
    margin-right: 12px;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
    letter-spacing: 0.04em;
    color: #111111;
 
    &:disabled {
        &:hover {
            pointer-events: none;
        }
    }

    @media screen and (min-width: 768px){
        width: 160px;
    }

`

export const ButtonCall = styled.a`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F59256;
    border-radius: 40px;
    border: none;
    margin-right: 12px;
    margin-bottom: 12px;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    color: #FFFFFF;


    &:disabled {
        &:hover {
        pointer-events: none;
        }
    }
    
    @media screen and (min-width: 768px){
        width: 160px;
        margin-bottom: 0;
    }
`