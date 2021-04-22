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
          <select onClick={e => setColour(e.target.value)}>
                    <option defaultValue={colourState}>{colourState}</option>
                    <option value="blue">Blue</option>
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="silver">Silver</option>
          </select>
        </label>
        <br/>
        <label>
          Make:
          <select onClick={e => setMake(e.target.value)}>
                    <option defaultValue={makeState}>{makeState}</option>
                    <option value="Aston Martin">Aston Martin</option>
                    <option value="Alfa Romeo">Alfa Romeo</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
          </select>
        </label>
        <br/>
        <label>
          Model:
           <select onClick={e => setModel(e.target.value)}>
                    <option defaultValue={modelState}>{modelState}</option>
                    <option value="Austin Maestro">Austin Maestro</option>
                    <option value="Alfa Romeo GT">Alfa Romeo GT</option>
                    <option value="Audi R8">Audi R8</option>
                    <option value="BMW M1">BMW M1</option>
          </select>
        </label>
        <br/>
        <label>
          Doors:
          <select onClick={e => setDoors(e.target.value)}>
                    <option defaultValue={doorsState}>{doorsState}</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
          </select>
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