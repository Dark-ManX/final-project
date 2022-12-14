import wait from 'img/wait.jpg';
import { Container } from './Loading.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Container>
      <RotatingLines
        strokeColor="#f59256"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Container>
  );
};

export default Loading;
