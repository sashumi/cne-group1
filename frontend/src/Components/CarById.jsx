import {useState} from 'react';
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


  function deleteCar(id) {
  axios.delete("http://localhost:9092/car/delete/"+id)
  .then(response => {
    console.log(response.data);
});
}

  return( 
      <>
  <h1> Cars {id} </h1> 

  <table style={{width:"60%"}}>
    <thead>
      <tr>
        <th>Name</th>
        <th>ID</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.name}</td>
        <td>{data.id}</td>
        <td><button type="submit" onClick={() => deleteCar(data.id)}>Delete car</button></td>
      </tr>
    </tbody>
  </table>
  </>
  );
}
export default CarID;