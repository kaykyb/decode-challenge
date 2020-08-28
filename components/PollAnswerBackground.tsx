import * as React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

type Props = {
  value: number;
  cyan?: boolean;
  open?: boolean;
};

const AnswerBackground = posed.div({
  closed: {
    width: 0,
  },

  open: {
    width: ({ value }: Props) => value * 100 + '%',
  },

  props: {
    value: 0,
  },
});

const StyledAnswerBackground = styled(AnswerBackground)<Props>`
  height: 100%;
  background: ${(p) => (p.cyan ? '#a2fff4' : `rgba(0, 0, 0, ${p.value / 2})`)};
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
  border-radius: ${(p) => (p.value < 1 ? '5px 0px 0px 5px' : '5px')};
`;

export default function PollAnswerBackground({ value, cyan, open }: Props) {
  return (
    <StyledAnswerBackground
      value={value}
      cyan={cyan}
      pose={open ? 'open' : 'closed'}
    />
  );
}
