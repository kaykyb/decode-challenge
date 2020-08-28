import * as React from 'react';
import styled from 'styled-components';
import { QandA } from '../types';

type Props = {
  qanda: QandA /* q and a -- question and answer */;
};

const PollWrapper = styled.div``;

export default function Poll({ qanda }: Props) {
  console.log('selected question: ', qanda);
  return <PollWrapper>The Poll implementation goes here</PollWrapper>;
}
