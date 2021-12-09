import { combineReducers } from "redux";
import todos from "./todos";
import filters from "./filterSlice";

export default combineReducers({
	todos,
	filters,
});
