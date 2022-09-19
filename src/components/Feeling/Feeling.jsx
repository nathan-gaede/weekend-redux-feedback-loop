import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddFeeling = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();
    const handleFeeling = (event) => {
        event.preventDefault();
        // const blank = {
        //     if ({feeling} === '')alert('Please enter response to continue')
        //     else if(feeling !== '') {
        //         return true;
        //     }
        // }    
       
        
        dispatch({type: 'ADD_FEELING', payload: event.target.value});
    }
    
    return (
        <>
            <h3>How are you feeling?
                <br/>
                5 = Feeling Fantastic, 1 = Pits of despair.
            </h3>
            {/* TODO add a handleNext button to prevent page navigation
            progress if input field is blank. */}
            <input maxLength={1} value={feeling}  onChange={handleFeeling}className="input" type="text" required/>
            <button onClick={(event) => { {if(feeling === '')alert('Please enter response to continue')} handleFeeling, history.push('/understanding');} }>Next</button>
        
        </>
    );
}

export default AddFeeling;