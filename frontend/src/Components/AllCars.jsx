import {Link, useParams} from 'react-router-dom';

const Cars = () => {
    const {id} = useParams();
    return(          
        <>  
            <h1>Cars</h1>
            <strong>Select a car:</strong>
            <ul>
                <li>
                    ID: <Link to="/cars/readbyid/1">Car 1</Link>
                    Colour:
                    Doors:                    
                    Make:
                    Model:
                    Name: <Link to="/cars/readbyname/carexample1">Car Example 1</Link>
                </li>
            </ul>
            <p>{id}</p>
        </> 
    );
}
export default Cars;