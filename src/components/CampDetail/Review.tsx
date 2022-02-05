import { MOBILE_BREAKPOINT } from '@/constants';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 24px 0;
`;

const Contetns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  padding: 24px;
  background-color: ${props => props.theme.color.white};
  img {
    width: 30px;
    padding: 12px 0;
  }
  .content {
    flex: 4;
  }
  .reviewer {
    flex: 1;
    margin-top: 12px;
    color: ${props => props.theme.color.gray_03};
  }
`;

interface IReview {
  content: string;
  reviewer: string;
}
interface Props {
  reviews: IReview[];
}
function Review({ reviews }: Props) {
  return (
    <Container>
      <Contetns>
        {reviews.map((review, index) => (
          <ReviewBox key={index}>
            <img src='https://cdn.comento.kr/images/class/pt/detail/icon/seedling.png' />
            <p className='content' dangerouslySetInnerHTML={{ __html: review.content }}/>
            <p className='reviewer'>-{review.reviewer}</p>
          </ReviewBox>
        ))}
      </Contetns>
    </Container>
  );
}

export default Review;
