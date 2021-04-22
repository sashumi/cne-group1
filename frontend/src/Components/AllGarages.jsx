import {Link, useParams} from 'react-router-dom';

const Garages = () => {
    const {id} = useParams(); 
    return(          
        <>  
            <h1>Garages</h1>
            <strong>Select a garage:</strong>
            <ul>
                <li>
                    <Link to="/garage/readbyid/1">Garage 1</Link>
                </li>
                <li>
                    <Link to="/garage/readbyid/2">Garage 2</Link>
                </li>
                <li>
                    <Link to="/garage/readbyid/3">Garage 3</Link>
                </li>
                <li>
                    <Link to="/garage/readbyid/4">Garage 4</Link>
                </li>
                <li>
                    <Link to="/garage/readbyid/5">Garage 5</Link>
                </li>
            </ul>
            <p>{id}</p>
        </> 
    );
}
export default Garages;