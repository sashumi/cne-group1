import {Link} from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return(
        <>
            <nav>
                <li class="navigation"><Link class="navlink" to="/">Home</Link></li>
                <li class="navigation"><Link class="navlink" to="/cars/create">Add a car</Link></li>
                <li class="navigation"><Link class="navlink" to="/garage/create">Add a garage</Link></li>
                <li class="navigation"><Link class="navlink" to="/garage/all">See all garages</Link></li>
                <li class="navigation"><Link class="navlink" to="/cars/all">See all cars</Link></li>
            </nav>
        </>
    );
}
export default Nav;