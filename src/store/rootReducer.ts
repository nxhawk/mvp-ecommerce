import { AnyAction, combineReducers, Reducer } from "redux";
import { AppState } from ".";
import cartSlice from "./cart";

export const combinedReducer = combineReducers({
  cart: cartSlice,
});

const rootReducer: Reducer = (state: AppState, action: AnyAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;
