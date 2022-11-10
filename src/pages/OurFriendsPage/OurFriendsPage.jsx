import { Container, FriendsThumb, Title } from "./OurFriendsPage.styled";

const OurFriendsPage = () => {
    
    const arr = [{ title: 'ЛКП "ЛЕВ"', time: '8-19', adress: 'Grigorenka Street, 25', email: 'barbos@gmail.com', phone: '0664880480' }, { title: 'Барбос', time: '8-20', adress: 'Grigorenka Street, 3', email: 'barbos@gmail.com', phone: '4880480' }, { title: 'ЛКП "ЛЕВ"', time: '', adress: '', email: 'barbos@gmail.com', phone: '0664880480' }];

    return (
        <>
            <Title>Our friends</Title>
            <FriendsThumb>
                {arr.map(({img, title, time, adress, email, phone}) => (
                    <Container>
                        <div>{img}</div>
                        <div>
                            <h3>{title}</h3>
                            <ul>
                                <li>Time:
                                    {
                                        time ? (<span>{time}</span>) : (<span>----------</span>)
                                    }
                                </li>
                                <li>Adress:
                                    {
                                        adress ? (<span>{adress}</span>) : (<span>----------</span>)
                                    }
                                </li>
                                <li>Email:
                                    {
                                        email ? (<span>{email}</span>) : (<span>----------</span>)
                                    }
                                </li>
                                <li>Phone:
                                    {
                                        phone ? (<span>{phone}</span>) : (<span>----------</span>)
                                    }
                                </li>
                            </ul>
                        </div>
                        
                    </Container>
                ))
                }
            </FriendsThumb>
        </>
    )
}

export default OurFriendsPage;