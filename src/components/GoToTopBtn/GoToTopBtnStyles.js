import styled from 'styled-components'

export const GoToTopBtnEl = styled.a`
  position: fixed;
  top: 85%;
  left: 88vw;
  visibility: ${({ showBtn }) => (showBtn ? 'visible' : 'hidden')};
  opacity: ${({ showBtn }) => (showBtn ? '1' : '0')};
  transition: opacity .8s ease;
  &:focus {
    background: transparent;
  }
  & > svg {
    width: 200%;
    height: auto;
  }
`
