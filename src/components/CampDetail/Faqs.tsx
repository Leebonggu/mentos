import styled from 'styled-components';
import * as R from 'ramda';
import Accordion from '../Accordion';
import isEqual from '@/fn/isEqual';
import { useState } from 'react';

const Container = styled.div``;

interface Faq {
  answer: string;
  question: string;
  selected?: boolean;
  idx?: number;
}
interface Props {
  faqs: Faq[];
}

function Faqs({ faqs: originalFaq }: Props) {
  const [faqs, _setFaqs] = useState(() => {
    return originalFaq.map((faq: Faq, index: number) => ({ ...faq, selected: false, id: index + 1 }))
  })

  const onClick = (value: number) => {
    const toggled = R.map((faq) => ({
      ...faq,
      selected: R.ifElse(
        isEqual,
        () => !faq.selected,
        () => faq.selected,
      )(faq.id === value)
    }), faqs)
    _setFaqs(toggled);
  };

  return (
    <Container>
      {R.map((faq) => (
        <Accordion
          key={faq.id}
          onClick={onClick}
          answer={faq.answer}
          question={faq.question}
          value={faq.id}
          selected={faq.selected}
        />
      ), faqs)}
    </Container>
  );
}

export default Faqs;
