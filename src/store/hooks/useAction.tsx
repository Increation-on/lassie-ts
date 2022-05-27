import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from '../action-creators/action-creators-object';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}

