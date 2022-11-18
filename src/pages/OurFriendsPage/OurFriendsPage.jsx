import {response} from 'api';
import { useEffect, useState } from 'react';
// import { RotatingLines } from 'react-loader-spinner';
import Loading from 'components/Loding/Loading';
import Error from 'components/error/error';
import { Anchor, CardThumb, Container, FirstThumb, FriendsThumb, FriendTitle, Image, Item, SecondThumb, Title } from "./OurFriendsPage.styled";

const OurFriendsPage = () => { 
    
    const [arr, setArr] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const getFriends = async () => {
        setIsLoading(true);
        try {
            const res = await response.getFriends();
            setArr(res);
        } catch (err) {
            setError(err);
            return;
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <>
            {isLoading && (
                <Loading/>
                // <RotatingLines
                //         strokeColor="grey"
                //         strokeWidth="5"
                //         animationDuration="0.75"
                //         width="96"
                //         visible={true}
                // />
            )}

            {arr && (
                <>
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

            {error && (
                <Error/>
            )}
    </>
    )
}

export default OurFriendsPage;