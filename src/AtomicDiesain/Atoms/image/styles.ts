import styled from "styled-components";

export const ImagePost = styled.img`
  object-fit: contain; // or cover 
  width: 100%;
  height: 100%;
`
export const ImageAvatar = styled.div<{photo :string}>`
    background-image: url(${props => props.photo});
  border: none;
  border-radius: 20px;
  width: 13rem;
  height: 13rem;
  background-position: center;
  background-size: cover;
`