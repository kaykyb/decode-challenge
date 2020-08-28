import * as React from 'react';
import styled from 'styled-components';
import { QandA } from '../types';
import PollQuestion from './PollQuestion';
import PollAnswerList from './PollAnswerList';
import { useState } from 'react';

type Props = {
  qanda: QandA /* q and a -- question and answer */;
};

const PollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 42px 0;
`;

const PollContainer = styled.div`
  box-sizing: border-box;
  padding: 20px 24px;
  flex: 1;

  @media (min-width: 720px) {
    max-width: 366px;
  }

  border-radius: 5px;
  border: 1px solid #ececec;
  box-shadow: 0px 5px 10px #ececec;
`;

const AnswersContainer = styled.div`
  margin-top: 16px;
`;

export default function Poll({ qanda }: Props) {
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  // adds the user vote without modifying the original object
  const qandaWithUserVote = (): QandA => {
    const newAnswers = [...qanda.answers];

    newAnswers[selectedAnswer] = {
      ...qanda.answers[selectedAnswer],
      votes: qanda.answers[selectedAnswer].votes + 1,
    };

    const newQandA: QandA = {
      question: qanda.question,
      answers: newAnswers,
    };

    return newQandA;
  };

  const handleSelect = (qIndex: number) => {
    // don't let the user change its vote?
    // if (answered) return;

    if (answered && qIndex === selectedAnswer) {
      setAnswered(false);
      return;
    }

    setSelectedAnswer(qIndex);
    setAnswered(true);
  };

  const processedQandA = answered ? qandaWithUserVote() : qanda;

  return (
    <PollWrapper>
      <PollContainer>
        <PollQuestion question={processedQandA.question} />
        <AnswersContainer>
          <PollAnswerList
            answers={processedQandA.answers}
            selected={answered ? selectedAnswer : undefined}
            onSelect={handleSelect}
          />
        </AnswersContainer>
      </PollContainer>
    </PollWrapper>
  );
}
