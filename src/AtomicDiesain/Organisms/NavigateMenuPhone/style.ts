import styled from "styled-components";

export  const NavigateMenuWrapper = styled.div`
display: none;
  opacity: 0;
  @media(max-width: 700px ) {
    display: block;
    position: fixed;
    bottom: 10px;
    opacity: 1;
  }
`