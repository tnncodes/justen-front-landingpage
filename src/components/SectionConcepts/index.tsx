import React from 'react'

import Container from '../../components/Container'
import Heading from '../../components/Heading'

import { SectionConceptsProps } from '../../types/api'

import * as S from './styles'

const SectionConcepts = ({ title, concepts }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ id, title }) => (
          <S.Item key={id}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
