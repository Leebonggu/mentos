import { ArrowUpIcon } from '@/icons/ArrowUpIcon';
import { Container, IconWrapper, AccodianTitle, AccodianContents } from './styles';

interface AccordionProps {
  answer?: string;
  question: string;
  selected: boolean;
  onClick: (value: number) => void;
  value: number | string;
}

function Accordion(props: AccordionProps) {
  const { answer, question, selected, onClick, value } = props;
  return (
    <>
      <Container onClick={() => onClick(Number(value))}>
        <AccodianTitle>{question}</AccodianTitle>
        <IconWrapper selected={selected}>
          <ArrowUpIcon/> 
        </IconWrapper>
      </Container>
      {<AccodianContents selected={selected}>{answer}</AccodianContents>}
    </>
  );
}

export default Accordion;