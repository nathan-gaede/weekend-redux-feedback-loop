import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const DisplaySummary = () => {

    const history= useHistory();
    const dispatch= useDispatch();
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const comment = useSelector(store => store.comment)

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/summary',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comment: comment
            }

        }).then((response) => {
            dispatch({ type: 'CLEAR_ALL'});
            history.push('/');
        }).catch((error) => {
            console.log(error);
            alert('Something wrong in POST');
        })
    }
    
        return (
            <>
                <h3>Summary</h3>
                    <div>
                        <h2>{feeling}</h2>
                        <h2>{understanding}</h2>
                        <h2>{support}</h2>
                        <h2>{comment}</h2>
                            <button onClick= {handleSubmit}
                             className="button">Submit</button>
                    </div>
            </>
    );
}

export default DisplaySummary;
