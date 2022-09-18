import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddSupport = () => {
    const history = useHistory();
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();
    const handleSupport = (event) => {
        dispatch({type: 'ADD_SUPPORT', payload: event.target.value});

    }
    return (
        <>
            <h3>Do you feel supported?
                <br/>
                5 = Most supported, 1 = least supported
            </h3>
            <input value={support} onChange={handleSupport} placeholder="*type number 1-5*"className="input" type="text"/>
            <button onClick={() => history.push('/comment')}>Next</button>
        
        </>
    );
}

export default AddSupport;