import { combineReducers } from "redux";
import currentUser from "./currentUser";
import registerUser from "./registerUser";
import loginUser from "./loginUser";

const chapterApp = combineReducers({
    currentUser,
    registerUser,
    loginUser
});

export default chapterApp;