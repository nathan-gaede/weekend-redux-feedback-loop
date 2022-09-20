import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



const AddFeeling = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling)
    const dispatch = useDispatch();
    const handleFeeling = (event) => {
        event.preventDefault();
        // console.log(feelingInput);
        
            dispatch({type: 'ADD_FEELING', payload: event.target.value});
        
            
        
    } 
    
     const nextPage = () => {
        // console.log(feelingInput);
        if (feeling > 0 && feeling < 6) {
            console.log('on the right track');
        
            history.push('/understanding');
        }else{alert('Please enter value between 1 and 5')}
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
            <button id="next-feeling"  disabled={!feeling} onClick={nextPage} >Next</button>
        
        </>
    );
}

export default AddFeeling;