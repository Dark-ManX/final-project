import styled from "styled-components";

export const NoticeCategoryItemStyled = styled.li`
    list-style: none;
    width: 280px;
    height: 606px;
    background: #FFFFFF;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 0px 20px 20px;

    @media screen and (min-width: 768px) {
        width: 336px;
    }

    @media screen and (min-width: 1280px) {
        width: 288px;
    }
`;

export const CardInfoContainer = styled.div`
    padding-left: 20px;
    padding-right: 29px;

    @media screen and (min-width: 768px) {
        padding-right: 85px;
    }

    @media screen and (min-width: 1280px) {
        padding-right: 37px;
    }
`;

export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 20px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.36;
    letter-spacing: -0.01em;
    color: #111111;
`;

export const CardImageContainer = styled.div`
    position: relative;
`;

export const Photo = styled.img`
    display: block;
    position: relative;
    margin-bottom: 20px;
    width: 280px;
    height: 288px;

    @media screen and (min-width: 768px) {
        width: 336px;
    }

    @media screen and (min-width: 1280px) {
        width: 288px;
    }
`;

export const Category = styled.p`
    position: absolute;
    top: 20px;
    left: 0;
    padding: 6px 50px 7px 20px;
    margin: 0;

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
`;

export const AddToFavoriteBtn = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    padding: 0;
  
    background: rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    border: 1px solid transparent;

    &:hover,
    &:focus {
        color: #F59256;
    }
`;

export const RemoveFromFavoriteBtn = styled(AddToFavoriteBtn)`
    color: rgba(17, 17, 17, 0.6);
`;

export const CardDetailsContainer = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    max-width: 180px;
    margin-top: 0;
    margin-bottom: 50px;
    padding-left: 0;

    @media screen and (min-width: 1280px) {
        max-width: 177px;
    }
`;

export const CardDetailInfo = styled.p`
    margin-top: 0;
    margin-bottom: 8px;

    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    color: #111111;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 28px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    width: 248px;
    height: 38px;

    background: #FFFFFF;
    border: 2px solid #F59256;
    border-radius: 40px;

    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: 0.04em;
    color: #F59256;

    &:hover,
    &:focus {
        color: #FF6101;
        border: 2px solid #FF6101;
    }
`;