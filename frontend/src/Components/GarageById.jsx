import {useParams} from 'react-router-dom';

const GarageID = () => {
    const {id} = useParams();
    return( <h1> Garage {id} </h1> );

    

}
export default GarageID;