import { combineReducers } from "redux";
import islogin from "./login";

import nav from './nav';

export const myReducer = combineReducers({
    nav,
    islogin
})