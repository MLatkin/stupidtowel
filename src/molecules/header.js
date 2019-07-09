import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HeaderLink = styled(Link)`
  text-decoration: none;
  min-width: 54px;
  padding: 1px 15px 0;
  cursor: pointer;
  transition: color .15s ease-out;
  text-transform: uppercase;
  color: ${({ active }) => active ? 'orange': 'white'};
  font-weight: 600;
`

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #2d2d2d;
`


export default function Header() {
  const url = window.location.hash

  return (
    <HeaderWrap>
      <HeaderLink to="/" active={url === '#/'}>Главная</HeaderLink>
      <HeaderLink to="/about" active={url === '#/about'}>Обо мне</HeaderLink>
    </HeaderWrap>
  )
}
