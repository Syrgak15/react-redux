import {useDispatch, useSelector} from "react-redux";
import ChangeTitle from "../../components/ChangeTitle";
import {asyncFunctionAction} from "../../redux/actions";

function AboutPage() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={dispatch(asyncFunctionAction())}>after 2 sec</button>
        </div>
    );
}

export default AboutPage;