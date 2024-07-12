import {useDispatch} from "react-redux";

function ChangeTitle(props) {
    const dispatch = useDispatch();
    const changeAboutTitle=()=>{
        dispatch({
            type:"CHANGE_ABOUT_TITLE"
        })
    }

    return (
        <div>
            <button onClick={changeAboutTitle}>change about title</button>
        </div>
    );
}

export default ChangeTitle;