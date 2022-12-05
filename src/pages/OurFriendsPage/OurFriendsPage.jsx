import { response } from 'api';
import { useEffect, useState } from 'react';
import Loading from 'components/Loading/Loading';
import Error from 'components/Error/Error';
import { MainContainer } from 'components/commonStyles/Container.styled';
import {
  Anchor,
  CardThumb,
  Container,
  FirstThumb,
  FriendsThumb,
  FriendTitle,
  Image,
  Item,
  SecondThumb,
  Title,
} from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  const { getFriends } = response;

  const [arr, setArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllFriends = async () => {
    try {
      setIsLoading(true);
      const res = await getFriends();
      setArr(res);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllFriends();
  }, []);

  return (
    <MainContainer>
      <Title>Our friends</Title>

      {isLoading && <Loading />}

      {arr && (
        <FriendsThumb>
          {arr.map(({ _id, imageUrl, title, time, address, email, phone }) => (
            <Container key={_id}>
              <FriendTitle>{title}</FriendTitle>

              <CardThumb>
                <FirstThumb>
                  <Image src={imageUrl} alt={`${title} img`} />
                </FirstThumb>

                <SecondThumb>
                  <ul>
                    <Item>
                      Time: <br />
                      <div className="time">
                        {time ? <span>{time}</span> : <span>----------</span>}
                      </div>
                    </Item>

                    <Item>
                      Adress:
                      <br />
                      {address ? (
                        <span>{address}</span>
                      ) : (
                        <span>----------</span>
                      )}
                    </Item>

                    <Item>
                      Email:
                      <br />
                      {email ? (
                        <Anchor href={`mailto:${email}`}>{email}</Anchor>
                      ) : (
                        <span>----------</span>
                      )}
                    </Item>

                    <Item>
                      Phone:
                      <br />
                      {phone ? (
                        <Anchor href={`tel:${phone}`}>{phone}</Anchor>
                      ) : (
                        <span>----------</span>
                      )}
                    </Item>
                  </ul>
                </SecondThumb>
              </CardThumb>
            </Container>
          ))}
        </FriendsThumb>
      )}

      {error && <Error />}
    </MainContainer>
  );
};

export default OurFriendsPage;
