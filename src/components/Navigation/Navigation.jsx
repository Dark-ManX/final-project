import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {

    const location = useLocation();

    return (
        
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to={'/news'} state={{ from: location }}>News</NavLink>
                </li>
                <li>
                    <NavLink to={''} state={{ from: location }}>Find pet</NavLink>
                </li>
                <li>
                    <NavLink to={'/friends'} state={{ from: location }}>Our friend</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;