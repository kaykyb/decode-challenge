import * as React from 'react';
import { QandAsDocument } from '../types';
import { useState } from 'react';
import Poll from './Poll';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

export default function RandomPoll({ qandas }: Props) {
  // selects a random question from qandas
  const [qIndex] = useState(
    Math.floor(Math.random() * qandas.questions.length)
  );

  return <Poll qanda={qandas.questions[qIndex]}></Poll>;
}
