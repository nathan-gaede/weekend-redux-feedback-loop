import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



const AddFeeling = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling)
    const dispatch = useDispatch();
    const handleFeeling = (event) => {
        event.preventDefault();
        let feelingInput = document.getElementById("feelingInput");
        // console.log(feelingInput);
        if (feelingInput.maxLength === 1) {
            console.log('on the right track');
        }
        
        
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
            <input id="feelingInput" maxLength={1} onChange={handleFeeling} className="input" type="text" required/>
            <button id="next-feeling"  disabled={!feeling} onClick={() => {handleFeeling, history.push('/understanding');} }>Next</button>
        
        </>
    );
}

export default AddFeeling;