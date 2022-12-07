import portrait from 'img/portrait.png';
import { MainContainer } from 'components/commonStyles/Container.styled';
import {
  Header,
  Image,
  ImageContainer,
  MainPageSection,
} from './MainPage.styled';
import { useOutletContext } from 'react-router-dom';

const MainPage = () => {
  const { firstLoad } = useOutletContext();

  return (
    <MainPageSection>
      <MainContainer>
        <Header className={firstLoad && 'firstLoadHeader'}>
          Take good care of your small pets
        </Header>

        <ImageContainer className={firstLoad && 'firstLoad'}>
          <Image
            src={portrait}
            alt="portrait"
            className={firstLoad && 'firstImgLoad'}
          />
        </ImageContainer>
      </MainContainer>
    </MainPageSection>
  );
};

export default MainPage;
