import styled from "styled-components";

export const DontLoginUser = styled.div<{ isLog: string }>`
  display: ${props => props.isLog};
`