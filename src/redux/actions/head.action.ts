import * as types from "../types";

function headRobotAction(
  selectName: string,
  selectValue: string,
  option: string[]
) {
  return (dispatch: any) => {
    if (selectValue === option[2])
      return dispatch(headRobotActionSuccess(selectName));

    return dispatch(headRobotActionFailure());
  };
}

function headRobotActionSuccess(selectName: string) {
  return {
    type: types.VERIFY_CONDITION_HEAD_SUCCESS,
    payload: selectName,
  };
}
function headRobotActionFailure() {
  return {
    type: types.VERIFY_CONDITION_HEAD_FAILURE,
    payload: "",
  };
}

const actions = { headRobotAction };

export default actions;
