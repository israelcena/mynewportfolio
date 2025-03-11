import React from 'react'

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Prazer! Israel<br />
      </SectionTitle>
      <SectionText>
        Sou Desenvolvedor de software desde 2007, formado em <strong>Marketing e Sistemas de Informação</strong>. 
        Atualmente, desenvolvedor de software na <a href='https://centralit.com.br/' target='_blank' className='ext-Link'>CentralIT</a>.
        Ajudo em projetos Open Source e em Ongs.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://israelcena.com.br/israelcv.pdf')
        }
      >
        Download CV
      </Button>
      <SectionDivider />
    </LeftSection>
  </Section>
)

export default Hero
