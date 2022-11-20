import { useLocation } from 'react-router-dom';
import { List, Navigation, NavigationItem, NavigationLink } from './Nav.styled';

const Nav = ({set}) => {
  const location = useLocation();

  return (
    <Navigation className={set && 'shown'}>
      <List>
        <NavigationItem>

          <NavigationLink to={'/news'} state={{ from: location }}>
            News
          </NavigationLink>
          </NavigationItem>
        
        <NavigationItem>
          <NavigationLink to={`/notices/${'sell'}`} state={{ from: location }}>
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
