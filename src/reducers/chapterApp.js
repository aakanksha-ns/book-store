import { combineReducers } from "redux";
import currentUser from "./currentUser";
import currentStep from "./currentStep";
import registerUser from "./registerUser";
import loginUser from "./loginUser";

const chapterApp = combineReducers({
    currentUser,
    currentStep,
    registerUser,
    loginUser
});

export default chapterApp;