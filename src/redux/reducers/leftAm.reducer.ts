import * as types from "../types";

const INITIAL_STATE = {
  disabledLeftArm: "",
};

function leftArmReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.VERIFY_CONDITION_ARM_LEFT_SUCCESS:
      return { disabledLeftArm: action.payload };
    case types.VERIFY_CONDITION_ARM_LEFT_FAILURE:
      return { disabledLeftArm: action.paylaod };

    default:
      return state;
  }
}

export default leftArmReducer;
