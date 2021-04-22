import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const GetAllGarage = () => {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    if(isLoaded === false){
        axios.get("http://localhost:9092/garage/read")
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
                <th>ID</th>
            </tr>

            {data.map((item) => (
                <tr>
                    <td><Link to={"/garage/readbyid/"+item.id}>{item.name}</Link></td>
                    <td>{item.id}</td>
                </tr>

            ))}
        </table>
        </>
    );
}

export default GetAllGarage;