import {Link, useParams} from 'react-router-dom';

const Cars = () => {
    const {id} = useParams();
    return(          
        <>  
            <h1>Cars</h1>
            <strong>Select a car:</strong>
            <ul>
                <li>
                    <Link to="/cars/readbyid/1">Car 1</Link>
                    <Link to="/cars/readbyname/carexample1">Car Example 1</Link>
                </li>
                <li>
                    <Link to="/cars/readbyid/2">Car 2</Link>
                    <Link to="/cars/readbyname/carexample2">Car Example 2</Link>
                </li>
                <li>
                    <Link to="/cars/readbyid/3">Car 3</Link>
                    <Link to="/cars/readbyname/carexample3">Car Example 3</Link>
                </li>
                <li>
                    <Link to="/cars/readbyid/4">Car 4</Link>
                    <Link to="/cars/readbyname/carexample4">Car Example 4</Link>
                </li>
                <li>
                    <Link to="/cars/readbyid/5">Car 5</Link>
                    <Link to="/cars/readbyname/carexample5">Car Example 5</Link>
                </li>
            </ul>
            <p>{id}</p>
        </> 
    );
}
export default Cars;