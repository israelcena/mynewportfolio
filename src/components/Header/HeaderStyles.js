import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  margin-bottom: -4rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 1.5rem;
    margin-bottom: -1rem;
    padding-top: 4rem;
  }
`

export const Div1 = styled.div`
  grid-area: 1 / 1 / 1 / 2;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 1 / 6;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 10vw;
    & a {
      align-self: center;
    }
  }
`

export const Div2 = styled.div`
  grid-area: 1 / 2 / 1 / 5;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 3 / 2 / 3 / 5;
    margin: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 3 / 2 / 3 / 5;
    margin-bottom: 1rem;
  }
`

export const Div3 = styled.div`
  grid-area: 1 / 5 / 1 / 6;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    align-items: center;
    margin-top: 3rem;
    grid-area: 2 / 2 / 2 / 5;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    margin-top: 3rem;
    grid-area: 2 / 1 / 2 / 6;
  }
`

export const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  object-fit: contain;
  margin: -1rem -2rem 0.5rem 0;
  float: right;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 15%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 25%;
    margin: 0 2rem 0 2rem;
    float: inline-start;
  }
`
export const Span = styled.span`
  font-size: 2.8rem;
  display: block;
  float: right;
  @media ${(props) => props.theme.breakpoints.md} {
    float: none;
    margin-top: 2.5rem;
  }
`

export const Span2 = styled.span`
  font-size: 1.8rem;
  float: right;
  @media ${(props) => props.theme.breakpoints.md} {
    float: none;
  }
`

// Navigation Links
export const UlNav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 12rem;
  flex-wrap: nowrap;

  @media ${(props) => props.theme.breakpoints.md} {
    & li {
      margin: 0.5rem;
      padding: 1rem;
      border-radius: 0.7rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-wrap: initial;
    & li {
      padding: 0.6rem !important;
      background-color: #3498db;
      & a {
        font-size: 1.5rem;
      }
    }
  }
`

export const NavLink = styled.span`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: white;
    font-size: 2.1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: inherit;
    padding: 0.5rem;
  }
`

// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
