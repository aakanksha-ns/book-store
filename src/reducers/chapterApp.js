import { combineReducers } from "redux";
import currentUser from "./currentUser";
import registerUser from "./registerUser";
import loginUser from "./loginUser";
import shopPage from "./shopPage";

const chapterApp = combineReducers({
    currentUser,
    registerUser,
    loginUser,
    shopPage
});

export default chapterApp;