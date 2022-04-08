import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root.reducer";
import AllActions from "../../redux/actions";

import { Container, Items, Item1, Item2, BoxTitle, Content } from "./styles";

interface SelectProps {
  selectName: string;
  option1: string[];
  option2: string[];
  name1: string;
  name2: string;
}

export function SelectRobotAction({
  selectName,
  option1,
  option2,
  name1,
  name2,
}: SelectProps) {
  const dispatch = useDispatch();

  const disabledHead = useSelector<RootState>(
    (state) => state.headReducer.disabledHead
  );
  const disabledLeftArm = useSelector<RootState>(
    (state) => state.leftArmReducer.disabledLeftArm
  );
  const disabledRightArm = useSelector<RootState>(
    (state) => state.rightArmReducer.disabledRightArm
  );

  const [countOption1, setCountOption1] = useState(0);
  const [countOption2, setCountOption2] = useState(0);

  function handleEventCount() {
    if (selectName === "Cabeça")
      dispatch(
        AllActions.headAction.headRobotAction(
          selectName,
          option1[countOption1],
          option1
        )
      );

    if (selectName === "Braço Esquerdo")
      dispatch(
        AllActions.leftArmAction.leftArmRobotAction(
          selectName,
          option1[countOption1],
          option1
        )
      );
    if (selectName === "Braço Direito")
      dispatch(
        AllActions.rightArmAction.rightArmRobotAction(
          selectName,
          option1[countOption1],
          option1
        )
      );
  }
  useEffect(() => {
    handleEventCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countOption1]);

  return (
    <Container>
      <BoxTitle>
        <h1>{selectName.toUpperCase()}</h1>
      </BoxTitle>

      <Content>
        <Items>
          <Item1>
            <p>{name1}</p>
          </Item1>
          <Item2>
            <p>{option1[countOption1]}</p>
            <div>
              <button
                onClick={() => {
                  setCountOption1(countOption1 - 1);
                }}
                disabled={countOption1 === 0}
              >
                <span className="material-icons-outlined">expand_less</span>
              </button>
              <button
                onClick={() => setCountOption1(countOption1 + 1)}
                disabled={countOption1 === option1.length - 1}
              >
                <span className="material-icons-outlined">
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          </Item2>
        </Items>

        {selectName === "Cabeça" && (
          <Items isDisabled={disabledHead === selectName}>
            <Item1>
              <p>{name2}</p>
            </Item1>
            <Item2>
              <p>{option2[countOption2]}</p>
              <div>
                <button
                  onClick={() => setCountOption2(countOption2 - 1)}
                  disabled={countOption2 === 0}
                >
                  <span className="material-icons-outlined">expand_less</span>
                </button>
                <button
                  onClick={() => setCountOption2(countOption2 + 1)}
                  disabled={countOption2 === option2.length - 1}
                >
                  <span className="material-icons-outlined">
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
            </Item2>
          </Items>
        )}
        {selectName === "Braço Esquerdo" && (
          <Items isDisabled={!(disabledLeftArm === selectName)}>
            <Item1>
              <p>{name2}</p>
            </Item1>
            <Item2>
              <p>{option2[countOption2]}</p>
              <div>
                <button
                  onClick={() => setCountOption2(countOption2 - 1)}
                  disabled={countOption2 === 0}
                >
                  <span className="material-icons-outlined">expand_less</span>
                </button>
                <button
                  onClick={() => setCountOption2(countOption2 + 1)}
                  disabled={countOption2 === option2.length - 1}
                >
                  <span className="material-icons-outlined">
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
            </Item2>
          </Items>
        )}
        {selectName === "Braço Direito" && (
          <Items isDisabled={!(disabledRightArm === selectName)}>
            <Item1>
              <p>{name2}</p>
            </Item1>
            <Item2>
              <p>{option2[countOption2]}</p>
              <div>
                <button
                  onClick={() => setCountOption2(countOption2 - 1)}
                  disabled={countOption2 === 0}
                >
                  <span className="material-icons-outlined">expand_less</span>
                </button>
                <button
                  onClick={() => setCountOption2(countOption2 + 1)}
                  disabled={countOption2 === option2.length - 1}
                >
                  <span className="material-icons-outlined">
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
            </Item2>
          </Items>
        )}
      </Content>
    </Container>
  );
}
