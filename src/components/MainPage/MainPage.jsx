import portrait from 'img/portrait.png';
import { Image, ImageContainer, MainPageSection } from "./MainPage.styled";

const MainPage = () => {

    return (
      <MainPageSection>        
        
          <ImageContainer>
            <Image
              src={portrait} alt="portrait" />
          </ImageContainer>
      </MainPageSection>
    )
}

export default MainPage;