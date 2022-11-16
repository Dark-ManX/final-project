import { useEffect, useState } from 'react';
import { CardThumb, Container, FirstThumb, FriendsThumb, FriendTitle, Image, SecondThumb, Title, Item, Anchor} from "./OurFriendsPage.styled";


const OurFriendsPage = () => { 
    
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch('https://team-api-blended2.herokuapp.com/friends').then(res => res.json()).then(({ data }) => {
            console.log(data.friends)
            setArr(data.friends)
        }).catch(err => console.log(err.message))
    }, [])

    return (
        <div>
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
                                    <Item>Adress:<br/>
                                        {
                                            address ? (<span>{address}</span>) : (<span>----------</span>)
                                        }
                                    </Item>
                                    <Item>Email:<br/>
                                        {
                                            email ? (<Anchor href={`mailto:${email}`}>{email}</Anchor>) : (<span>----------</span>)
                                        }
                                    </Item>
                                    <Item>Phone:<br/>
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
        </div>
    )
}

export default OurFriendsPage;