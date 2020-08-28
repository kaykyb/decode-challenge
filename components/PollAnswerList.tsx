import * as React from 'react';
import styled from 'styled-components';
import { Answer } from '../types';
import PollAnswer from './PollAnswer';

type Props = {
  answers: Answer[];
  onSelect?: (qIndex: number) => void;
  selected?: number;
};

const AnswersList = styled.div``;
const AnswersWrapper = styled.div``;
const AnswersVotes = styled.div`
  margin-top: 16px;
  font-size: 0.875em;
  color: #969696;
`;

export default function PollAnswerList({ answers, selected, onSelect }: Props) {
  console.log('answers: ', selected);

  let totalVotes = answers.reduce((p, c) => p + c.votes, 0);
  let maxVotes = answers.reduce((a, b) => (a.votes > b.votes ? a : b)).votes;

  return (
    <AnswersWrapper>
      <AnswersList>
        {answers.map((v, i) => (
          <PollAnswer
            answer={v}
            totalVotes={totalVotes}
            maxVotes={maxVotes}
            key={i}
            selected={selected === i}
            showVotes={selected !== undefined}
            onClick={() => onSelect && onSelect(i)}
          />
        ))}
      </AnswersList>
      <AnswersVotes>{totalVotes} votes</AnswersVotes>
    </AnswersWrapper>
  );
}
