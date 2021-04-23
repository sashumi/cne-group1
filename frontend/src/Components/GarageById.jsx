import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';

const GarageID = () => {
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])
    const [carData, setCarData] = useState([])
    
    if(isLoaded === false){
        axios.get("http://localhost:9092/garage/read/"+id)
        .then(response => {
            console.log(response.data);
            setData(response.data);
            setCarData(response.data.cars);
        });
        setIsLoaded(true); 
    }

    return( 
        <>
    <h1> Garage {id} </h1> 

    <table style={{width:"20%"}}>
        <thead>
             <tr>
                <th>Garage name</th>
                <th>Garage ID</th>

            </tr>           
        </thead>
        <tbody>
            <tr>
                <td>{data.name}</td>
                <td>{data.id}</td>
                
            </tr>
        </tbody>
    </table>
    <br></br>
    <br></br>

    <table style={{width:"60%"}}>
        <thead>
             <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Colour</th>
                <th>Doors</th>
                <th>ID</th>

            </tr>           
        </thead>
        <tbody>


                {carData.map((item) => (
                <tr>
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
export default GarageID;