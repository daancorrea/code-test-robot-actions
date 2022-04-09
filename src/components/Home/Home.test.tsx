import { render } from "@testing-library/react";
import { Home } from ".";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

test("home renders correctly", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
});
