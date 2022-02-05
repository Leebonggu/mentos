import useTimeConter from '@/hooks/useDdayCounter';
import { secondToDate } from '@/libs/secondToDateFormat';
import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin-top: 20px;
  height: 36px;
  flex: 1;
  display: flex;
`;

const Contents = styled.div`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 8px;
  border-radius: 4px;
  background-color: #fff7f7;

  font-size: ${props => props.theme.typography.size.xs};
  color: ${props => props.theme.color.gray_02};
`;

const Limit = styled.span`
  color: rgb(250, 82, 82);
  font-weight: ${props => props.theme.typography.weight.bold};
`;


const baseline = dayjs('2022-02-13')
function TimeLimitBox() {
  const Dday = useTimeConter(baseline)
  return (
    <Container>
      <Contents>
        {Dday >= 0 ? (
          <>
            <Limit>{secondToDate(Dday)}</Limit>&nbsp;후 클래스가 마감돼요.
          </>
        ) : (
          <Limit>마감되었습니다</Limit>
        )}
      </Contents>
    </Container>
  );
}

export default TimeLimitBox;
