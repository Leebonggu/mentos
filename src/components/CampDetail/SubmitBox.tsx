import { ICampDetail } from '@/typings';
import React from 'react';
import styled from 'styled-components';
import font from '@/styles/font';
import Tag from '../atom/Tag';
import { theme } from '@/styles';
import Button from '../atom/Button';
import { MOBILE_BREAKPOINT } from '@/constants';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 4;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.white};
  border-radius: 6px;
  box-shadow: 0 0 6px rgb(0 0 0 / 10%);

  .feild {
    flex :1;
    color: ${props => props.theme.color.gray_02}
  }
  .title {
    flex: 4;
    ${font.H2}
  }
  .detail {
    flex :6;
    display: flex;
    flex-direction: column;
  }
`;

const Detail = styled.div`
  flex :4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${props => props.theme.typography.size.xs};

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  }
  .class-info {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      margin-bottom: 10px;
    }
    & > .desc-title {
      flex: 4;
    }
    & > .content {
      flex: 6;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  font-weight: ${props => props.theme.typography.weight.bold};
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const tagsJoin = (tags: string[]) => {
  return tags.join('∙')
}

function SubmitBox(props: ICampDetail) {
  const {
    name, tags, process, reviewMaterial, startDate, seat, id
  } = props;
  return (
    <Container>
      <div className='feild'>{tagsJoin(tags)}</div>
      <div className='title'>{name}</div>
      <Detail>
        <div className='class-info'>
          <span className='desc-title'>시작일</span>
          <span  className='content'>{startDate}</span>
        </div>
        <div className='class-info'>
          <span className='desc-title'>수업과정</span>
          <span className='content'>{process}</span>
        </div>
        <div className='class-info'>
          <span className='desc-title'>정원</span>
          <span className='content'>{seat}</span>
        </div>
        <div className='class-info'>
          <span className='desc-title'>제공자료</span>
          <span className='content'>{reviewMaterial.map(metairal =>(
            <Tag
              bgColor={theme.color.gray_04}
              fontColor={theme.color.gray_02}
              key={metairal}>{metairal}</Tag>
           ))}
          </span>
        </div>
      </Detail>
        <Link to={`/apply/${id}`}>
          <ButtonContainer>
            <Button disabled={false}>
                등록하기
            </Button>
          </ButtonContainer>
        </Link>
    </Container>
  );
}

export default SubmitBox;
