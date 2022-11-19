import { response } from 'api';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import Error from 'components/Common/Error/Error';
import Loading from 'components/Common/Loading/Loading';
import { Anchor, CardThumb, Container, FirstThumb, FriendsThumb, FriendTitle, Image, Item, SecondThumb, Title } from "./OurFriendsPage.styled";

const OurFriendsPage = () => {
    
    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
=======
// import { RotatingLines } from 'react-loader-spinner';
import Loading from 'components/Loding/Loading';
import Error from 'components/error/error';
import { Anchor, CardThumb, Container, FirstThumb, FriendsThumb, FriendTitle, Image, Item, SecondThumb, Title } from "./OurFriendsPage.styled";

const OurFriendsPage = () => { 
>>>>>>> 18565377fb22b321d07d02483ce4f38b2b97ef28

    const { getFriends } = response;
    
    const [arr, setArr] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

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
        <>
            {arr && (<>
                <Title>Our friends</Title>
                
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
                                        <Item >Time: <br />
                                            <div className='time'>
                                                {
                                                    time ? (<span>{time}</span>) : (<span>----------</span>)
                                                }
                                            </div>
                                        </Item>
                                        <Item>Adress:<br />
                                            {
                                                address ? (<span>{address}</span>) : (<span>----------</span>)
                                            }
                                        </Item>
                                        <Item>Email:<br />
                                            {
                                                email ? (<Anchor href={`mailto:${email}`}>{email}</Anchor>) : (<span>----------</span>)
                                            }
                                        </Item>
                                        <Item>Phone:<br />
                                            {
                                                phone ? (<Anchor href={`tel:${phone}`}>{phone}</Anchor>) : (<span>----------</span>)
                                            }
                                        </Item>
                                    </ul>

                                </SecondThumb>
                            </CardThumb>
                        </Container>
                    
                    ))
                    }
                    

                </FriendsThumb>
            </>
            )}

            {isLoading && <Loading/>}

            {error && <Error/>}
        </>
   
    )
}

export default OurFriendsPage;