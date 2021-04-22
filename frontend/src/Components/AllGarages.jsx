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
                    Name:
                </li>
            </ul>
            <p>{id}</p>
        </> 
    );
}
export default Garages;