import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  flex-shrink: 0;
`

export const SwiperContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1600px;
  margin: 0 auto;

  .swiper {
    padding: 2rem 3rem 5rem 3rem;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    align-items: stretch;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #d0bb57;
    background: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;

    &:after {
      font-size: 2rem;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background: #9cc9e3;
    width: 12px;
    height: 12px;
    opacity: 0.5;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  .swiper-pagination-bullet-active {
    background: #d0bb57;
    opacity: 1;
    transform: scale(1.2);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem 1.5rem;

    .swiper {
      padding: 1.5rem 2rem 4rem 2rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 40px;
      height: 40px;

      &:after {
        font-size: 1.6rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 0.5rem;

    .swiper {
      padding: 1rem 0.5rem 4rem 0.5rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 3rem;
`

export const LoadingText = styled.p`
  font-size: 2rem;
  color: #9cc9e3;
  text-align: center;
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
  width: 100%;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  background-color: hsl(205.1, 100%, 36.1%);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 30px rgba(80, 78, 78, 0.7);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    min-height: 550px;
  }
`

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding: 0.5rem 1rem;
`

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1px;
  color: #9cc9e3;
  padding: 1rem 0 0.5rem 0;
  margin: 0;
  font-size: ${(props) => (props.title ? '2.2rem' : '1.8rem')};
  transition: all 0.3s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: white;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.title ? '1.9rem' : '1.6rem')};
  }
`

export const Hr = styled.hr`
  width: 60px;
  height: 3px;
  margin: 10px auto 15px auto;
  border: 0;
  background: #d0bb57;
  border-radius: 5px;
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
  padding: 0.5rem 2rem;
  color: #e4e6e7;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem 1.5rem;
    font-size: 1.3rem;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin: 2rem 2rem;
  margin-top: auto;
`

export const ExternalLinks = styled.a`
  color: hsl(204, 23.8%, 95.9%);
  font-size: 1.5rem;
  padding: 1rem 2rem;
  background: #5222d0;
  border-radius: 25px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  flex: 1;
  max-width: 45%;

  &:hover {
    background: #6f3de8;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(82, 34, 208, 0.4);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    padding: 0.8rem 1.5rem;
  }
`

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.8rem 1rem;
    gap: 0.5rem;
  }
`

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.3rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 15px;
  list-style: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
    padding: 0.3rem 0.8rem;
  }
`
