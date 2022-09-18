import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";

const DisplaySummary = () => {
    const history= useHistory();
    const displayFeeling = useSelector(store => store.feeling)
    const displayUnderstanding = useSelector(store => store.understanding)
    const displaySupport = useSelector(store => store.support)
    const displayComment = useSelector(store => store.comment)
    return (
        <>
        <h3>Summary</h3>
        <div>
                <h2>{displayFeeling}</h2>
                <h2>{displayUnderstanding}</h2>
                <h2>{displaySupport}</h2>
                <h2>{displayComment}</h2>
                <button onClick={() => history.push('/summary')} className="button">Submit</button>
        </div>
        </>
    );
}

export default DisplaySummary;
