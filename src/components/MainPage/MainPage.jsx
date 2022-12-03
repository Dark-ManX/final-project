import portrait from 'img/portrait.png';
import { MainContainer } from 'components/commonStyles/Container.styled';
import { Header, Image, ImageContainer, MainPageSection } from "./MainPage.styled";

const MainPage = () => {

  return (
    <MainPageSection> 
      <MainContainer>

        <Header>Take good care of your small pets</Header>
        
        <ImageContainer>
          <Image
            src={portrait} alt="portrait" />
        </ImageContainer>

      </MainContainer>
    </MainPageSection>     
    )
}

export default MainPage;