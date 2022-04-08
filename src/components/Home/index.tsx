import { head, leftArm, rightArm } from "../../util/actions.robot";

import { SelectRobotAction } from "../SelectRobotAction";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <SelectRobotAction
        selectName={head.bodyType}
        option1={head.inclinação}
        option2={head.rotação}
        name1={head.name2}
        name2={head.name1}
      />
      <SelectRobotAction
        selectName={leftArm.bodyType}
        option1={leftArm.cotovelo}
        option2={leftArm.pulso}
        name1={leftArm.name1}
        name2={leftArm.name2}
      />
      <SelectRobotAction
        selectName={rightArm.bodyType}
        option1={rightArm.cotovelo}
        option2={rightArm.pulso}
        name1={rightArm.name1}
        name2={rightArm.name2}
      />
    </Container>
  );
}
