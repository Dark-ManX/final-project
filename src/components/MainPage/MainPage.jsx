import portrait from 'img/portrait.png';
import { Header, Image, ImageContainer, MainPageSection } from "./MainPage.styled";

const MainPage = () => {

    return (
      <MainPageSection>        
          <Header>Take good care of your small pets</Header>
          <ImageContainer>
            <Image
              src={portrait} alt="portrait" />
          </ImageContainer>
      </MainPageSection>
    )
}

export default MainPage;