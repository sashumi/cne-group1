import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const CarID = () => {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
          .get('http://localhost:9092/car/read/' + id)
          .then((res) => res)
          .then((result) => {
              setIsLoaded(true);
              setItems(result.data.data);
    
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );
      }, []);
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
              {console.log(items)}
            {items.map((item) => (
              <li key={item.id}>
                Colour: {item.colour}
                Doors: {item.door}
                Make: {item.make}
                Model: {item.model}
                Name: {item.name}
              </li>
              
            ))}
          </ul>
        );
      }
}
export default CarID;