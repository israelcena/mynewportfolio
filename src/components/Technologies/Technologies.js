import React from 'react'
import { DiIllustrator, DiReact, DiNodejs } from 'react-icons/di'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id="tech">
    <br />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Tecnologias que são as minhas paixões no desenvolvimento Web.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="6rem" />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
            Atualmente estou focando em React, trabalhando com NextJS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="6rem" />
        <ListContainer>
          <ListTitle>BackEnd</ListTitle>
          <ListParagraph>
            Seguindo a stack javascript, Node é a minha linguagem backend
            favorita.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiIllustrator size="6rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Prototipação de interface e experiência do usuário é também umas das
            minhas skills.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <br />
    <SectionDivider />
  </Section>
)

export default Technologies
