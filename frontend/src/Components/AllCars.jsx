import {Link, useParams} from 'react-router-dom';

const Cars = () => {
    const {id} = useParams();
    return(          
        <>  
            <h1>Cars</h1>
        </> 
    );
}
export default Cars;