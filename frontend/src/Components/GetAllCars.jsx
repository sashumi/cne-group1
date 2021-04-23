import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const GetAllCars = () => {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    if(isLoaded === false){
        axios.get("http://localhost:9092/car/read")
        .then(response => {
            console.log(response.data);
            setData(response.data);
        });
        setIsLoaded(true); 
    }

    
    return(
        <>
        <h1>Cars</h1>
        <table style={{width:"60%"}}>
            <thead>
               <tr>
                <th>Name</th>
                <th>Make</th>
                <th>Model</th>
                <th>Color</th>
                <th># of doors</th>
                <th>Car ID</th>
            </tr>             
            </thead>
            <tbody>
            {data.map((item) => (
                <tr>
                    <td><Link to={"/cars/readbyid/"+item.id}>{item.name}</Link></td>
                    <td>{item.make}</td>
                    <td>{item.model}</td>
                    <td>{item.colour}</td>
                    <td>{item.doors}</td>
                    <td>{item.id}</td>
                </tr>
            ))}
            </tbody>



        </table>
        </>
    );
}

export default GetAllCars;