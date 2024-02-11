import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube
} from 'react-icons/ai'
import {
  Container,
  Span,
  Span2,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Img,
  UlNav
} from './HeaderStyles'
import { Images } from '../../constants/constants'

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <Img src={Images[0].image} />
          <Span>Israel Cena</Span>
          <Span2>FullStack Dev</Span2>
        </Link>
      </Div1>
      <Div2>
        <UlNav>
          <li
            style={{
              backgroundColor: '#9b59b6',
              padding: '1.5rem',
              borderRadius: '.7rem'
            }}
          >
            <NavLink>
              <a target="_blank" href="http://blog.israelcena.com.br/">
                Blog
              </a>
            </NavLink>
          </li>
          <li>
            <Link href="#projects">
              <NavLink>Projetos</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <NavLink>Áreas</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <NavLink>Sobre</NavLink>
            </Link>
          </li>
        </UlNav>
      </Div2>
      <Div3>
        <SocialIcons target="_blank" href="https://github.com/israelcena">
          <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://linkedin.com/in/israelcena">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://youtube.com/israelcena">
          <AiFillYoutube size="4rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
)

export default Header
