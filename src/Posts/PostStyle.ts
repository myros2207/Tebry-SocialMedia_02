import styled from "styled-components";

export const PostWrapper = styled.div`
  background: darkcyan;
  margin-top: 10px;
  width: 30rem;
  height: 40rem;
  border-radius: 10px;
`
export const PostListWrapper = styled.div`
display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;  
`

export const PostAuthorHeader = styled.h1`
  //background: darkblue;
  color: wheat;
  padding: 5px;
`

export const PostImageBox = styled.div`
  width: 100%;
  background-color: rebeccapurple;
  height: 70%;
`
export const PostImage = styled.img`
    object-fit: contain; // or cover 
  width: 100%;
  height: 100%;
`

export const PostButtonBox = styled.div`
    border: 1px solid;
    width: 100%;
    height: 10%;
`
export const PostButton = styled.button`
  border: none;
  height: 100%; 
  margin-right: 10px;
`