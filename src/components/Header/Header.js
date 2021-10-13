import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiSkillshare} from "react-icons/si";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    
    <Div1>
      <Link href="/">
        <a style={{display:'flex',alignItems:"center",color:"white",marginBottom:'20px'}}>
          <DiCssdeck size="3rem"/><Span>PortFolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/Ishwarya-Kanagaraman">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/ishwarya-kanagaraman-a223831b5/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href="https://drive.google.com/file/d/1WwXDpKm9yeK531Mvh8GRU5eBlWc1yQlF/view?usp=sharing">
        <SiSkillshare title="resume"size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
