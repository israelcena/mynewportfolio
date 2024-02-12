import React from 'react'
import { DiReact, DiNodejs } from 'react-icons/di'
import { FaNetworkWired } from 'react-icons/fa'
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
    <SectionTitle>Áreas de Atuação em T.I.</SectionTitle>
    <SectionText>
      Tecnologia sempre esteve em minha vida, desde a minha infância, então me
      profissionalizei em algumas áreas, entre estas são:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="10rem" />
        <ListContainer>
          <ListTitle>Dev FrontEnd</ListTitle>
          <br />
          <ListParagraph>
            Área que fico à vontade em trabalhar. Atualmente estou focando
            em React, trabalhando com Next e usando a hospedagem da Vercel.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="10rem" />
        <ListContainer>
          <ListTitle>Dev BackEnd</ListTitle>
          <br />
          <ListParagraph>
            Node é a minha linguagem backEnd favorita, usando o Express. Tenho
            também conhecimento em MongoDB. Atualmente estou a trabalhar também
            com Java usando Spring.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNetworkWired size="8rem" />
        <br />
        <ListContainer>
          <ListTitle>Rede e Hardware</ListTitle>
          <br />
          <ListParagraph>
            Também trabalho com a área de suporte técnico a rede local
            (administrador de redes e servidores Linux) e hardware (também
            conhecido como montagem e manutenção de micros).
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
