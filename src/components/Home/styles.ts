import styled from "styled-components";

export const Container = styled.div`
  width: 55%;
  display: grid;
  gap: 30px;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  margin: 30px auto 0 auto;

  div:first-child {
    grid-column: 1/3;
  }
`;
