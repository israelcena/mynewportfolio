import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4, text: 'Projetos Open Source'},
  { number: 5, text: 'Ongs Assistidas', },
  { number: 11, text: 'Github Followers', },
  { number: 500, text: 'Commits no Github', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Metas Alcançadas</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i} >
          <BoxNum>+{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
