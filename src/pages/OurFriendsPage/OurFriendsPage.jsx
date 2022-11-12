import { useState, useEffect } from 'react';
import { Container, FriendsThumb, CardThumb, FriendTitle, FirstThumb, SecondThumb, Title, Image, Item } from "./OurFriendsPage.styled";


const OurFriendsPage = () => { 
    
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch('https://team-api-blended2.herokuapp.com/friends').then(res => res.json()).then(({ data }) => {
            console.log(data.friends)
            setArr(data.friends)
        }).catch(err => console.log(err.message))
    }, [])

    return (
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
                                    <Item>Time:
                                        {
                                            time ? (<span>{time}</span>) : (<span>----------</span>)
                                        }
                                    </Item>
                                    <Item>Adress:
                                        {
                                            address ? (<span>{address}</span>) : (<span>----------</span>)
                                        }
                                    </Item>
                                    <Item>Email:
                                        {
                                            email ? (<a href={`mailto:${email}`}>{email}</a>) : (<span>----------</span>)
                                        }
                                    </Item>
                                    <Item>Phone:
                                        {
                                            phone ? (<a href={`tel:${phone}`}>{phone}</a>) : (<span>----------</span>)
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
    )
}

export default OurFriendsPage;