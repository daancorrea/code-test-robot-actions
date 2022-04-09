import React from "react";
import { useDispatch } from "react-redux";

import { GlobalStyles } from "./styles/global";
import { Home } from "./components/Home";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Home />
      <GlobalStyles />
    </>
  );
}

export default App;
