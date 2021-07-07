import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Link href='/'>
        <a style={{ display: "flex", alignItems: "center", color: "white"}}>
          <DiCssdeck size='3rem'/>
          <span>Portifolio</span>
        </a>
        
      </Link>
    </Container>
  </div>
);

export default Header;
