import { SelectRobotAction } from ".";
import { render, screen } from "@testing-library/react";
import { head } from "../../util/actions.robot";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

test("the robot's initial state should be 'Em repouso'", () => {
  render(
    <Provider store={store}>
      <SelectRobotAction
        name1={head.name1}
        name2={head.name2}
        option1={head.inclinação}
        option2={head.rotação}
        selectName={head.bodyType}
      />
    </Provider>
  );
  // eslint-disable-next-line jest/valid-expect
  expect(screen.getAllByText("Em repouso"));
});
