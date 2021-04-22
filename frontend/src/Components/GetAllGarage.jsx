import {useState} from 'react';
import axios from 'axios';

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
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                </tr>

            ))}
        </table>
        </>
    );
}

export default GetAllGarage;