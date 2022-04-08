import * as types from "../types";

function rightArmRobotAction(
  selectName: string,
  selectValue: string,
  option: string[]
) {
  return (dispatch: any) => {
    if (selectValue === option[3])
      return dispatch(rightArmRobotActionSuccess(selectName));

    return dispatch(rightArmRobotActionFailure());
  };
}
function rightArmRobotActionSuccess(selectName: string) {
  return {
    type: types.VERIFY_CONDITION_ARM_RIGHT_SUCCESS,
    payload: selectName,
  };
}
function rightArmRobotActionFailure() {
  return {
    type: types.VERIFY_CONDITION_ARM_RIGHT_FAILURE,
    payload: "",
  };
}

const actions = { rightArmRobotAction };

export default actions;
