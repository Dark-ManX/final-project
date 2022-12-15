import { response } from 'api';
import { useEffect, useState } from 'react';
import Loading from 'components/Loading/Loading';
import Error from 'components/Common/Error/Error';
import CurrentWorkTime from 'components/Friends/CurrentWorkTime/CurrentWorkTime';
import moment from 'moment/moment';
import shortid from 'shortid';
import FriendsWork from 'components/Friends/FriendsWork/FriendsWork';
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
  TimeContiner,
  ShownTime,
} from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  const { getFriends } = response;

  const [arr, setArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [workTime, setWorkTime] = useState({ from: null, to: null });
  const [state, setState] = useState(null);
  const [id, setId] = useState(false);
  const [show, setShow] = useState(false);

  const date = moment().format('dddd');
  const currentShortDay = date.split('').slice(0, 3).join('');

  useEffect(() => {
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

    getAllFriends();
  }, [getFriends]);

  return (
    <MainContainer>
      <Title>Our friends</Title>

      {isLoading && <Loading />}

      {arr && (
        <FriendsThumb>
          {arr.map(
            ({ _id, imageUrl, title, workDays, address, email, phone }) => (
              <Container key={_id}>
                <FriendTitle>{title}</FriendTitle>

                <CardThumb>
                  <FirstThumb>
                    <Image src={imageUrl} alt={`${title} img`} />
                  </FirstThumb>

                  <SecondThumb>
                    <ul>
                      <Item className="timeEl">
                        Time: <br />
                        <CurrentWorkTime
                          today={currentShortDay}
                          workSchedule={workDays}
                        />
                        <TimeContiner className="time">
                          <FriendsWork arr={workDays} />
                        </TimeContiner>
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
            )
          )}
        </FriendsThumb>
      )}

      {error && <Error />}
    </MainContainer>
  );
};

export default OurFriendsPage;
