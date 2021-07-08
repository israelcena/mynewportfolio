import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons, Img } from './HeaderStyles';
import { Images } from '../../constants/constants';

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: "flex", alignItems: "center", justifyContent: "start", color: "white", marginBottom: "20px" }}>
            <Img src={Images[0].image}/>
            <div>
              <Span>Israel Cena</Span>
              <span style={{display: "block", fontSize: "12px"}}>FrontEnd Dev</span>
            </div>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects"> 
          <NavLink>Projetos</NavLink>
          </Link> 
        </li>
        <li>
          <Link href="#tech"> 
          <NavLink>Tecnologias</NavLink>
          </Link> 
        </li>
        <li>
          <Link href="#about"> 
          <NavLink>Sobre</NavLink>
          </Link>
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
