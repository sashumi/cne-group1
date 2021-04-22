import {useState} from 'react';
import axios from 'axios';

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
        <table style={{width:"60%"}}>
            <tr>
                <th>Name</th>
                <th>Make</th>
                <th>Model</th>
                <th>Color</th>
                <th># of doors</th>
                <th>Car ID</th>
            </tr>

            {data.map((item) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.make}</td>
                    <td>{item.model}</td>
                    <td>{item.colour}</td>
                    <td>{item.doors}</td>
                    <td>{item.id}</td>
                </tr>

            ))}
        </table>
        </>
    );
}

export default GetAllCars;