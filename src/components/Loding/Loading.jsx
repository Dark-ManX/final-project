import wait from 'img/wait.jpg';
import { Container } from './Loading.styled';

const Loading = () => {

    return (

        <Container>
            <img src={wait} alt='wait' />
            <p>Почекайте 2-3 тижні. Максимум 5</p>
        </Container>
    )
}

export default Loading;