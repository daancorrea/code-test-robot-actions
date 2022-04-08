import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid black;
`;
interface ItemsProps {
  isDisabled?: boolean;
}
export const Items = styled.div<ItemsProps>`
  height: 50px;
  border: 1px solid black;
  margin-top: 5px;
  justify-content: flex-start;
  display: flex;
  pointer-events: ${(props) => (props.isDisabled ? `none` : `normal`)};
  opacity: ${(props) => (props.isDisabled ? `0.3` : `normal`)};
`;
export const Item1 = styled.div`
  border-right: 1px solid black;
  width: 200px;
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
`;
export const Item2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 2px;
  }
  p {
    margin-left: 10px;
  }
  button {
    width: 30px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    span {
      font-family: "Material Icons";
      font-size: 1.5rem;
    }
  }
`;

export const BoxTitle = styled.div`
  font-size: 0.9rem;
  background: #c2c2c2;
  h1 {
    margin-left: 10px;
  }
`;
export const Content = styled.div`
  padding: 10px;
`;
