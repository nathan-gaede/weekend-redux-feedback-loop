import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddUnderstanding = () => {
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();
    const handleUnderstanding = (event) => {
        dispatch({type: 'ADD_UNDERSTANDING', payload: event.target.value});

    }
    return (
        <>
            <h3>Do you understand the material?
                <br/>
                5 = Full understanding, 1 = Help, I'm lost.
            </h3>
            <input value={understanding} onChange={handleUnderstanding} className="input" type="text"/>
            <button onClick={() => history.push('/support')}>Next</button>
        
        </>
    );
}

export default AddUnderstanding;