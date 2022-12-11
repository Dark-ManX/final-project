import styled from 'styled-components';
import { ReactComponent as CloseCross } from 'icons/cross.svg';
import { ReactComponent as Female } from 'icons/female.svg';
import { ReactComponent as Male } from 'icons/male.svg';

export const Container = styled.div`
  overflow-y: auto;
  box-sizing: border-box;
  width: 280px;
  display: block;
  margin: 0 auto;
  padding: 40px 20px;

  background: #ffffff;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  right: 20px;
  top: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: #fdf7f2;
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

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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

export const InputCategoryContainer = styled.div`
position: relative;
display: flex;

&:first-child {
    margin-bottom: 12px;
  }
`;

export const InputLostCategory = styled.input`
  appearance: none;
  position: absolute;

  width: 131px;

  height: 35px;
  margin-bottom: 12px;
  padding: 8px 24px;

  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: transparent; 
  cursor: pointer;

  &:hover,
  &:focus,
  &:checked {
    background-color: #F59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 162px;
    height: 47px;
`;

export const LabelCategoryLost = styled.label`
  position: relative;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;

  height: 35px;
  padding: 8px 26px;
  margin-right: 12px;

  border-radius: 40px;

  cursor: pointer;
  z-index: 999;

  &:hover,
  &:focus {
    background-color: #F59256;
    color: #FFFFFF;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    height: 47px;

    color: #000000;
`;

export const InputCategoryGoodHands = styled.input`
  appearance: none;
  position: absolute;

  width: 155px;
  height: 35px;
  padding: 8px 24px;
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;


  &:hover,
  &:focus,
  &:checked {
    background-color: #F59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    width: 197px;
    height: 47px;
`;


export const LabelCategoryGoodHands = styled.label`
  position: relative;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  cursor: pointer;

  padding: 8px 24px;

  margin-right: 8px;

  &:hover,
  &:focus {
    color: #FFFFFF;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    padding: 8px 25px;
    height: 47px;

    color: #000000;
  }
`;

export const InputCategorySell = styled.input`
  appearance: none;
  position: absolute;

  display: block;
  width: 80px;
  height: 35px;
  margin-bottom: 12px;
  padding: 8px 24px;
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus,
  &:checked {
    background-color: #F59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    width: 91px;
    height: 47px;
    margin-bottom: -12px;
`;


export const LabelCategorySell = styled.label`
  position: relative;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  cursor: pointer;

  padding: 8px 24px;

  &:hover,
  &:focus {
    color: #FFFFFF;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    height: 47px;

    color: #000000;

    margin-bottom: 28px;
  }
`;

export const RadioLabel = styled.label`
  display: block;
  padding: 8px 25px;
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: transparent;
  cursor: pointer;

  &:has(input:checked) {
    background-color: #f59256;
    color: #ffffff;
  }
`;

export const Label = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(26 / 18);
  cursor: pointer;

  color: #111111;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 28px;
  }
`;

export const Span = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #f59256;

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

  background-color: #f59256;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;

  color: #ffffff;

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
  border: 2px solid #f59256;

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

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

export const Legend = styled.legend`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  margin-bottom: 16px;

  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 26px;

    color: #000000;
  }
`;

export const ButtonsSexPetContainer = styled.div`
  display: flex;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const LabelSexPet = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #111111;

  &:first-child {
  margin-right: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 26px;

    color: #000000;

    margin-bottom: 40px;

    &:first-child {
  margin-right: 80px;
  }
  }
`;

export const InputSexPet = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  
  flex-wrap: wrap;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0px;
  align-items: center;

  

  @media screen and (min-width: 768px) {
  
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
  position: absolute;
  width: 116px;
  height: 116px;
  background-color: #fdf7f2;
  border-radius: 20px;
  cursor: pointer;
  
  inset: 0;
  opacity: 0;
  z-index: 999;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
    display: block;
    margin-top: 12px;
  }
`;

export const AddImageButton = styled.button`
  position: relative;
  width: 116px;
  height: 116px;
  background-color: #fdf7f2;
  border-radius: 20px;
  border: none;

  margin-top: 8px;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
    display: block;
    margin-top: 12px;
  }
`;

export const PetImage = styled.img`
  width: 116px;
  height: 116px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }
`;

export const MaleSvg = styled(Male)`
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const FemaleSvg = styled(Female)`
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const CloseCrossIcon = styled(CloseCross)`
  width: 15px;
  height: 15px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
