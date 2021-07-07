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
      Trabalho como desenvolvedor desde 2007. 
      Sou formado em <strong>Marketing e Sistemas de Informação</strong>, 
      apaixonado por tecnologia desde criança. 
      Acredito que a tecnologia melhora o mundo e nos faz evoluir como sociedade 
      e que com bastante trabalho e fé tudo é possível!.
      </SectionText>
      <Button onClick={()=> window.location = 'https://www.google.com.br'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;