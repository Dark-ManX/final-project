import styled from 'styled-components';

export const Container = styled.div`
position: relative;
box-sizing: border-box;
width: 280px;
display: block;
margin: 0 auto;
padding: 40px 20px;

background: #FFFFFF;
border-radius: 20px;

@media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px;
}

@media screen and (min-width: 1280px) {

}
`;

export const CloseButton = styled.div`
position: absolute;
width: 34px;
height: 34px;
right: 23px;
top: 23px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

background: #FDF7F2;
backdrop-filter: blur(2px);

@media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    right: 24px;
    top: 24px;
}
`;


export const Title = styled.h3`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 33px;
text-align: center;

margin-bottom: 20px;

color: #111111;

@media screen and (min-width: 768px) {
font-weight: 600;
font-size: 36px;
line-height: 49px;

color: #000000;
}
`;

export const P = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
text-align: center;
letter-spacing: -0.01em;

margin-bottom: 20px;

color: #111111;

@media screen and (min-width: 768px) {
font-size: 20px;
line-height: 27px;
letter-spacing: -0.01em;

margin-bottom: 28px;

color: #000000;
}
`;

export const ButtonsCategoryContainer = styled.div`
box-sizing: content-box;
display: flex;
flex-wrap: wrap;
margin-bottom: 32px;

@media screen and (min-width: 768px) {
    margin-bottom: 28px;
}
`;

export const ButtonCategory = styled.button`
// display: block;
height: 35px;
padding: 8px 25px;
border: 2px solid #F59256;
border-radius: 40px;
background-color: transparent;
cursor: pointer;

&:not(:last-child) {
margin-bottom: 12px;
}

font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #000000;

flex: none;
order: 0;
flex-grow: 0;

&:hover,
&:focus {
    background-color: #F59256;
    color: #FFFFFF;
} 

&:not(:last-child) {
    margin-right: 8px;
}

@media screen and (min-width: 768px) {
font-size: 20px;
line-height: 27px;
height: 47px;

&:not(:last-child) {
margin-right: 12px;
margin-bottom: 16 px;
}
}
`;

export const Form = styled.form`
box-sizing: border-box;
display: flex;
flex-direction: column;
`;

export const Label = styled.label`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;

color: #111111;

&:nth-child(-n + 3) {
margin-bottom: 16px;
}

@media screen and (min-width: 768px) {
font-size: 24px;
line-height: 26px;

color: #000000;

&:nth-child(-n + 3) {
margin-bottom: 28px;
}

}
`;

export const Span = styled.span`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;

color: #F59256;

@media screen and (min-width: 768px) {
font-weight: 400;
font-size: 24px;
}

`;

export const Input = styled.input`
box-sizing: border-box;
width: 100%;
height: 40px;
    
background-color: #fdf7f2;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;
padding: 0px 14px;
margin-top: 8px;

    &::placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(27, 27, 27, 0.6);
    }

@media screen and (min-width: 768px) {
height: 48px;
margin-top: 12px;


&::placeholder {
    font-size: 16px;
    line-height: 26px;
    color: rgba(17, 17, 17, 0.6);
    }
}
`;

export const Textarea = styled.textarea`
box-sizing: border-box;
width: 100%;
height: 40px;
    
background-color: #fdf7f2;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;
padding: 10px 14px;
margin-top: 8px;
display: flex;
align-items: center;

resize: none;

    &::placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: rgba(27, 27, 27, 0.6);
    }

    @media screen and (min-width: 768px) {
        height: 113px;
        border-radius: 20px;

        &::placeholder {
            display: flex;
            align-items: center;
        }
    }
`;

export const ButtonsSubmitContainer = styled.div`
margin-top: 40px;

@media screen and (min-width: 768px) {
display: flex;
flex-direction: row-reverse;
margin-right: auto;
margin-left: auto;
}
`;

export const ButtonsSubmitColor = styled.div`
width: 100%;
height: 40px;

cursor: pointer;
border: none;
border-radius: 40px;

background-color: #F59256;

font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;

color: #FFFFFF;


margin-bottom: 12px;

@media screen and (min-width: 768px) {
width: 180px;
height: 44px;

font-size: 20px;
line-height: 27px;
letter-spacing: 0.04em;

margin-bottom: 0px;
}
`;

export const ButtonsSubmitWhite = styled.div`
width: 100%;
height: 40px;

cursor: pointer;
border: none;
border-radius: 40px;
border: 2px solid #F59256;

font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;

color: #111111;

@media screen and (min-width: 768px) {
width: 180px;
height: 44px;
margin-right: 20px;

font-size: 20px;
line-height: 27px;
letter-spacing: 0.04em;
}
`;

export const ButtonsSexPetContainer = styled.div`
display: flex;
margin-top: 18px;
margin-bottom: 50px;
`;

export const ButtonsSexPet = styled.button`
flex-wrap: wrap;
width: 40px;
height: 40px;
border: none;
cursor: pointer;
background-color: transparent;
padding: 0px;
align-items: center;

&:first-child {
margin-right: 40px;
}

@media screen and (min-width: 768px) {
    &:first-child {
    margin-right: 80px;
}
}
`;

export const SpanSexPet = styled.span`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;

margin-top: 12px;

display: flex;
align-items: center;

color: #000000;

@media screen and (min-width: 768px) {
font-size: 20px;
}

`;

export const InputFile = styled.input`
width: 116px;
height: 116px;
background-color: #fdf7f2;
border-radius: 20px;

margin-bottom: 20px;

@media screen and (min-width: 768px) {
width: 140px;
height: 140px;
display: block;
margin-top: 12px;
}
`;
