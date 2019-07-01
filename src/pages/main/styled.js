import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Cell = styled(Link)`
  width: 100%;
  min-height: 50%;
  height: 100%;
  position: relative;
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: .8;
  background-image: url(${({ image }) => image});
  span {
    text-decoration: none;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-weight: 700;
    line-height: 30px;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif
  }
`


export const Wrap = styled.div`
  height: calc(100vh - 60px);
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`

export const Horizontal = styled.div`
  height: ${({ rows }) => `calc(${rows}/3 * 100%)`};
  display: flex;
`
