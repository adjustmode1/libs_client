import { combineReducers } from "redux";
import islogin from "./login";
import info from "./info";
import nav from './nav';
import subject from "./subject";
import blogtag from './blogtag';

export const myReducer = combineReducers({
    nav,
    islogin,
    info,
    subject,
    blogtag
})