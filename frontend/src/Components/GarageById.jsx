import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';

const GarageID = () => {
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])
    
    if(isLoaded === false){
        axios.get("http://localhost:9092/garage/read/"+id)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        });
        setIsLoaded(true); 
    }

    return( 
        <>
    <h1> Garage {id} </h1> 

    <table style={{width:"60%"}}>
        <thead>
             <tr>
                <th>Name</th>
                <th>ID</th>
            </tr>           
        </thead>
        <tbody>
            <tr>
                <td>{data.name}</td>
                <td>{data.id}</td>
            </tr>
        </tbody>
    </table>
    </>
    );
}
export default GarageID;