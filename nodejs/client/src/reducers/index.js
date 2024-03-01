import { combineReducers } from "redux";
import counter from './reducers'
import reducerLogin from "./reducerLogin";
import reducerMenu from "./reducerMenu";

const allreducer = combineReducers({
    counter,
    reducerLogin,
    reducerMenu,
    // add more reducers here
});

export default allreducer;