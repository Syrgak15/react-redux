import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function ContactsPage(props) {
    const [input,setInput] = useState("");
    const contactsTitle = useSelector(state => state.contactsPageReducer.title);
    const dispatch = useDispatch();
    const withParams=()=>{
        dispatch({
            type:'WITH_PARAMS',
            payload: 12345
        })
    }

    const addInput=()=>{
        dispatch({
            type:'FROM_INPUT',
            payload:input
        })

    }
    return (
        <div>
            <h1>{contactsTitle}</h1>
            <button onClick={withParams}>change title with params</button>
            <p>-----------------</p>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addInput}>add</button>
        </div>
    );
}

export default ContactsPage;