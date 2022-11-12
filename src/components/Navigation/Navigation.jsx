import { NavLink, useLocation } from 'react-router-dom';
import { NavigationItem, NavigationLink } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul>
        <NavigationItem>
          <NavLink to={'/news'} state={{ from: location }}>
            <NavigationLink> News</NavigationLink>
          </NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to={''} state={{ from: location }}>
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
