import * as types from "../types";
const INITIAL_STATE = {
  disabledHead: "",
};

const headReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.VERIFY_CONDITION_HEAD_SUCCESS:
      return { disabledHead: action.payload };
    case types.VERIFY_CONDITION_HEAD_FAILURE:
      return { disabledHead: action.payload };

    default:
      return state;
  }
};

export default headReducer;
