import { useState } from 'react';
import axios from 'axios';


const NewCar = () => {
 
  const [nameState, setName] = useState('');
  const [colourState, setColour] = useState('');
  const [makeState, setMake] = useState('');
  const [modelState, setModel] = useState('');
  const [doorsState, setDoors] = useState('');
  const [garageIdState, setGarage] = useState('');


  const isEnabled = nameState.length > 0 && colourState.length > 0 &&
                      makeState.length > 0 && modelState.length > 0 &&
                      doorsState > 2 && doorsState < 6 && garageIdState > 0
      


  const handleSubmit = event => {
    event.preventDefault();

  let car = {
    name: nameState,
    colour: colourState,
    make: makeState,
    model: modelState,
    doors: doorsState,
    garage:{
      id: garageIdState
    }
  };

  axios.post(`http://localhost:9092/car/create`,  car)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={nameState} name="name" onChange={(e) => setName(e.target.value)} />
        </label>
        <br/>
        <label>
          Colour:
          <input type="text" value={colourState} name="colour" onChange={(e) => setColour(e.target.value)} />
        </label>
        <br/>
        <label>
          Make:
          <input type="text" value={makeState} name="make" onChange={(e) => setMake(e.target.value)} />
        </label>
        <br/>
        <label>
          Model:
          <input type="text" value={modelState} name="model" onChange={(e) => setModel(e.target.value)} />
        </label>
        <br/>
        <label>
          Doors:
          <input type="text" value={doorsState} name="doors" onChange={(e) => setDoors(e.target.value)} />
        </label>
        <br/>
        <label>
          Garage ID:
          <input type="text" value={garageIdState} name="garageId" onChange={(e) => setGarage(e.target.value)} />
        </label>
        <button type="submit" disabled={!isEnabled}>Add</button>
      </form>
    </div>
    )
  
}

export default NewCar; 