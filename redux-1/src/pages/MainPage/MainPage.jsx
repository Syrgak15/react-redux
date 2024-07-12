import {useSelector,useDispatch} from 'react-redux'
import ChangeTitle from "../../components/ChangeTitle";
import {changeTitleAction} from "../../redux/actions";


function MainPage(props) {
    const aboutTitle = useSelector(state=>state.mainPageReducer.title)
    const dispatch=useDispatch()

    return (
        <div>
            <h1>{aboutTitle}</h1>
            <button onClick={()=>dispatch(changeTitleAction())}>change title</button>
        </div>
    );
}

export default MainPage;