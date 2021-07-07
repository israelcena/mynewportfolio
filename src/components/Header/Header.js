import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size='5rem' />
            <span>Portifolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects"> </Link>
            <NavLink>Projetos</NavLink>
        </li>
        <li>
          <Link href="#tech"> </Link>
            <NavLink>Tecnologias</NavLink>
        </li>
        <li>
          <Link href="#about"> </Link>
            <NavLink>Sobre</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons target="_blank" href="https://github.com/israelcena">
          <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://linkedin.com/in/israelcena">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://twitter.com/israelcena">
          <AiFillTwitterCircle size="4rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://youtube.com/israelcena">
          <AiFillYoutube size="4rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://instagram.com/israelcena">
          <AiFillInstagram size="4rem" />
        </SocialIcons>
        
       
      </Div3>
    </Container>
  </div>
);

export default Header;
