import { combineReducers } from "redux";
import currentUser from "./currentUser";
import registerUser from "./registerUser";
import loginUser from "./loginUser";
import shopPage from "./shopPage";
import cart from "./Cart";

const chapterApp = combineReducers({
    currentUser,
    registerUser,
    loginUser,
    shopPage,
    cart
});

export default chapterApp;