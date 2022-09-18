import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddFeeling = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();
    const handleFeeling = (event) => {
        dispatch({type: 'ADD_FEELING', payload: event.target.value});

    }
    return (
        <>
            <h3>How are you feeling?
                <br/>
                5 = Feeling Fantastic, 1 = Pits of despair.
            </h3>

            <input value={feeling} onChange={handleFeeling} className="input" type="text"/>
            <button onClick={() =>history.push('/understanding')}>Next</button>
        
        </>
    );
}

export default AddFeeling;