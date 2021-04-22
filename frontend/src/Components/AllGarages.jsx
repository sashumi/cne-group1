import {Link, useParams} from 'react-router-dom';

const Garages = () => {
    const {id} = useParams(); 
    return(          
        <>  
            <h1>Garages</h1>
        </> 
    );
}
export default Garages;