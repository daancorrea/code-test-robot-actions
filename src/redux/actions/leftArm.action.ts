import * as types from "../types";

function leftArmRobotAction(
  selectName: string,
  selectValue: string,
  option: string[]
) {
  return (dispatch: any) => {
    if (selectValue === option[3])
      return dispatch(leftArmRobotActionSuccess(selectName));

    return dispatch(leftArmRobotActionFailure());
  };
}
function leftArmRobotActionSuccess(selectName: string) {
  return {
    type: types.VERIFY_CONDITION_ARM_LEFT_SUCCESS,
    payload: selectName,
  };
}
function leftArmRobotActionFailure() {
  return {
    type: types.VERIFY_CONDITION_ARM_LEFT_FAILURE,
    payload: "",
  };
}

const actions = { leftArmRobotAction };

export default actions;
