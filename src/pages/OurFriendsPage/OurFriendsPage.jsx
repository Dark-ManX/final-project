import { fetchFriends } from 'api/friendsApi';
import { useEffect, useState } from 'react';
import Error from 'components/Common/Error/Error';
import Loading from 'components/Common/Loding/Loading';
import { Anchor, CardThumb, Container, FirstThumb, FriendsThumb, FriendTitle, Image, Item, SecondThumb, Title } from "./OurFriendsPage.styled";

const OurFriendsPage = () => {
    
    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getFriends = async () => {
        try {
            setIsLoading(true);
            const res = await fetchFriends();
            setArr(res);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getFriends();
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