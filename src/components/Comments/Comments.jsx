import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddComment = () => {
    const history = useHistory();
    const comment = useSelector(store => store.comment);
    const dispatch = useDispatch();
    const handleComment = (event) => {
        dispatch({type: 'ADD_COMMENT', payload: event.target.value});

    }
    return (
        <>
            <h3>Do you have any feedback comments?
                <br/>
                
            </h3>

            <input value={comment} onChange={handleComment} className="input" type="text"/>
            <button onClick={() =>history.push('/summary')}>Next</button>
        
        </>
    );
}

export default AddComment;