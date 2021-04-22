import { useState } from 'react';
import axios from 'axios';


const NewGarage = () => {
 
  const [NameState, setName] = useState();

  const handleChange = event => {
    setName({ name: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
  }

  let garage = {
      name: NameState
    }

  axios.post(`http://localhost:9092/car/create`,  garage)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
 

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Garage Name:
          <input type="text" value={NameState} name="name" onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
    )
   }


export default NewGarage; 