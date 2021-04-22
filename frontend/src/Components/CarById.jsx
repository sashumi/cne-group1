import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const CarID = () => {
  const {id} = useParams();
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState([])
  
  if(isLoaded === false){
      axios.get("http://localhost:9092/car/read/"+id)
      .then(response => {
          console.log(response.data);
          setData(response.data);
      });
      setIsLoaded(true); 
  }

  return( 
      <>
  <h1> Cars {id} </h1> 

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
export default CarID;