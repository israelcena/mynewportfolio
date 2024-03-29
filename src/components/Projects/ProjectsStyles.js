import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 2rem;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  overflow: hidden;
  background-color: hsl(205.1, 100%, 36.1%);
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
  transition: all ease-in 0.2s;
  &:hover {
    color: white;
  }
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

export const CardInfo = styled.p`
  width: 100%;
  padding: 0.5rem 4rem;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  margin-bottom: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem 2rem;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
  color: hsl(204, 23.8%, 95.9%);
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #5222d0;
  border-radius: 15px;
  transition: all ease-in 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
`

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-wrap: wrap;
  }
`

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
  }
`
