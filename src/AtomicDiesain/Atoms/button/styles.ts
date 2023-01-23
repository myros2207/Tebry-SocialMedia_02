import styled from "styled-components";

export const LoginButton = styled.button`
  
`

export const CreateButton = styled.button`

`

export const ReactionButton = styled.button<{fonImage: string}>`
  background-image: url(${props => props.fonImage});
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 3rem;
  height: 3rem;
  background-position: center;
  background-size: cover;
`

export const NavigateButton = styled.button`

`