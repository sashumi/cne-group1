import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/cars/create">Add a car</Link>
            <Link to="/garage/create">Add a garage</Link>
            <Link to="/garage/all">See all garages</Link>
            <Link to="/cars/all">See all cars</Link>
        </>
    );
}
export default Nav;