import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

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
            <tr>
                <th>Name</th>
                <th>ID</th>
            </tr>
            <tr>
                <td>{data.name}</td>
                <td>{data.id}</td>
            </tr>
    </table>
    </>
    );
}
export default GarageID;