import styled from "styled-components";

export const NewsPageTitle = styled.h2`
    margin-bottom: 28px;  
    margin-top: 54px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.4;
    text-align: center;
    color: #111111;
    
    @media screen and (min-width: 768px) {
        margin-bottom: 40px; 
    }
`

export const NewsSet = styled.ul`
    display: grid;
    flex-wrap: wrap;
    row-gap: 40px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 60px 32px;
    }

    @media screen and (min-width: 1280px){
        grid-template-columns: repeat(3, 1fr);
    }
    
`
export const NewsItem = styled.li`
    /* width: 280px; */
    /* height: 286px; */
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        /* width: 336px;
        height: 288px; */
    }

    @media screen and (min-width: 1280px){
        /* width: 395px;
        height: 266px; */
    }
`
export const NewsItemRectangle = styled.span`
    display: block;
    margin-bottom: 4px;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
    border-radius: 40px;

    @media screen and (min-width: 768px){
        width: 280px;
        height: 8px;
    }
    @media screen and (min-width: 1280px){
        width: 340px;
    }
`

export const NewsItemTitle = styled.h3`
    margin-bottom: 16px;
`
export const NewsItemContent = styled.p`
    margin-bottom: 20px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #111321;
    flex-grow: 1;
    
    @media screen and (min-width: 768px){
        margin-bottom: 40px;
    }
`
export const NewsItemInfo = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-size: 16px;
    line-height: 1.4;
    display: flex;
    justify-content: space-between;
    
`
export const NewsItemLink = styled.a`
    font-weight: 500;
    text-align: right;
    text-decoration-line: underline;
    color: #F59256;
`
export const NewsItemDate = styled.span`
    font-weight: 400;
    color: rgba(17, 17, 17, 0.6);
`