import { combineReducers } from "redux";

import headReducer from "./reducers/head.reducer";
import leftArmReducer from "./reducers/leftAm.reducer";
import rightArmReducer from "./reducers/rightArm.reducer";

const rootReducer = combineReducers({
  headReducer,
  leftArmReducer,
  rightArmReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
