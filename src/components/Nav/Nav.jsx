import { useLocation } from 'react-router-dom';
import { NavigationItem, NavigationLink, Navigation, List } from './Nav.styled';

const Nav = () => {
  const location = useLocation();

  return (
    <Navigation>
      <List>
        <NavigationItem>

          {/* Якір у якорі, треба залишити один */}
          <NavigationLink to={'/news'} state={{ from: location }}>
            News
          </NavigationLink>
          </NavigationItem>
        
        <NavigationItem>
          <NavigationLink to={'/notices/sell'} state={{ from: location }}>
            Find pet
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to={'/friends'} state={{ from: location }}>
            Our friend
          </NavigationLink>
        </NavigationItem>
      </List>
    </Navigation>
  );

};

export default Nav;
