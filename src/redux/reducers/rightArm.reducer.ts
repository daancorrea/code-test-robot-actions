import * as types from "../types";

const INITIAL_STATE = {
  disabledRightArm: "",
};

function rightArmReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.VERIFY_CONDITION_ARM_RIGHT_SUCCESS:
      return { disabledRightArm: action.payload };
    case types.VERIFY_CONDITION_ARM_RIGHT_FAILURE:
      return { disabledRightArm: action.payload };

    default:
      return state;
  }
}

export default rightArmReducer;
