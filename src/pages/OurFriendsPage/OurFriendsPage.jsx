import shortid from 'shortid';
import { Container, FriendsThumb, FirstThumb, Title } from "./OurFriendsPage.styled";


const OurFriendsPage = () => { 
    
    
    const arr = [{ title: 'ЛКП "ЛЕВ"', time: '8-19', adress: 'Grigorenka Street, 25', email: 'barbos@gmail.com', phone: '0664880480' }, { title: 'Барбос', time: '8-20', adress: 'Grigorenka Street, 3', email: 'barbos@gmail.com', phone: '4880480' }, { title: 'ЛКП "ЛЕВ"', time: '', adress: '', email: 'barbos@gmail.com', phone: '0664880480' }];

    return (
        <>
            <Title>Our friends</Title>
            
            <FriendsThumb>

              {arr.map(({img, title, time, adress, email, phone}) => (
                <Container key={shortid.generate()}>
                    
                    <FirstThumb>
                        <img src={img} alt={`${title} img`} />
                    </FirstThumb>

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
                                    email ? (<a href={`mailto:${email}`}>{email}</a>) : (<span>----------</span>)
                                }
                            </li>
                            <li>Phone:
                                {
                                    phone ? (<a href={`tel:${phone}`}>{phone}</a>) : (<span>----------</span>)
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