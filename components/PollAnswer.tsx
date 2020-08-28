import * as React from 'react';
import styled from 'styled-components';
import { Answer } from '../types';
import PollAnswerBackground from './PollAnswerBackground';

type Props = {
  answer: Answer;
  totalVotes: number;
  maxVotes: number;

  onClick?: () => void;

  showVotes?: boolean;
  selected?: boolean /* is this the answer user selected? */;
};

type ContentProps = {
  bold?: boolean;
};

// separate button from container to propertly handle tab key
const AnswerButton = styled.button`
  display: block;
  width: 100%;
  margin: 8px 0;
  cursor: pointer;
  position: relative;
  font: inherit;
  background: transparent;
  border: none;
  padding: 0;

  :focus {
    outline: none;
  }

  :focus > div {
    border: 1px solid #000000;
  }
`;

const AnswerContainer = styled.div`
  display: block;
  width: 100%;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  :focus {
    outline: none;
  }
`;

const AnswerContent = styled.div<ContentProps>`
  min-height: 41px;
  position: relative;
  z-index: 2;
  font-weight: ${(p) => (p.bold ? 'bold' : 'initial')};
  display: flex;
  align-items: center;
`;

const AnswerText = styled.div`
  padding: 0px 8px;
  font-size: 1.1em;
`;

const AnswerPercentage = styled.div`
  padding: 10px 8px;
  flex: 1;
  text-align: end;
`;

const CheckIcon = styled.img`
  height: 24px;
  width: 24px;
`;

export default function PollAnswer({
  answer,
  totalVotes,
  maxVotes,
  showVotes,
  onClick,
  selected,
}: Props) {
  const percentage = answer.votes / totalVotes;
  const isMostVoted = maxVotes === answer.votes;

  return (
    <AnswerButton onClick={onClick}>
      <AnswerContainer tabIndex={-1}>
        <PollAnswerBackground
          value={percentage}
          cyan={isMostVoted}
          open={showVotes}
        />
        <AnswerContent bold={isMostVoted && showVotes}>
          <AnswerText>{answer.text}</AnswerText>
          {selected && (
            <CheckIcon src={require('../static/check-circle.svg')} />
          )}
          {showVotes && (
            <AnswerPercentage>{Math.round(percentage * 100)}%</AnswerPercentage>
          )}
        </AnswerContent>
      </AnswerContainer>
    </AnswerButton>
  );
}
