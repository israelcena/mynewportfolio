import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Olá :-) <br/>
        Meu nome é Israel
      </SectionTitle>
      <SectionText>
      Desenvolvedor desde 2007 <br />
      Formado em <strong>Marketing e Sistemas de Informação</strong> <br />
      Ajudo em projetos Open Source e em Ongs
      </SectionText>
      <Button onClick={()=> window.location = 'https://github.com/israelcena/mynewportfolio/raw/main/Israel%20Maicena%20Neves.pdf'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;