import { NavLink, useLocation } from 'react-router-dom';
import { NavigationItem, NavigationLink } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <NavigationItem>

          {/* Якір у якорі, треба залишити один */}
          <NavLink to={'/news'} state={{ from: location }}>
            <NavigationLink> News</NavigationLink>
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to={'/notices/sell'} state={{ from: location }}>
            <NavigationLink> Find pet</NavigationLink>
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to={'/friends'} state={{ from: location }}>
            <NavigationLink>Our friend</NavigationLink>
          </NavLink>
        </NavigationItem>
      </ul>
    </nav>
  );

};

export default Navigation;
