import * as React from 'react';
import styled from 'styled-components';
import { Question } from '../types';

type Props = {
  question: Question /* q and a -- question and answer */;
};

const PollHeading = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

export default function PollQuestion({ question }: Props) {
  return <PollHeading>{question.text}</PollHeading>;
}
