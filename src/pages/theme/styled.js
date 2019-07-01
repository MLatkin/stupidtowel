import styled from 'styled-components'


export const ArticleWrap = styled.a`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  width: calc(100% - 80px);
  border-radius: 5px;
  box-shadow: 6px 9px 19px -2px rgba(0,0,0,0.38);
  h2 {
    margin: 0;
    color: black;
    font-weight: 400;
    line-height: 30px;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif
  }
  span {
    font-size: 0.7rem;
    color: gray;
  }
`
