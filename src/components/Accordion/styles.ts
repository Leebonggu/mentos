import styled from "styled-components";

interface SelectProps {
  selected?: boolean;
}

export const Container = styled.div<SelectProps>`
  width: 100%;
  /* height: 72px; */
  padding: 18px 0;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  color: ${props => props.selected ? '#24242480' : '#242424'};
  cursor: pointer;
  /* transition: height 0.25s linear; */
`;

export const AccodianTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -0.15px;
  font-weight: ${props => props.theme.typography.weight.bold};
`;

export const AccodianContents = styled.div<{selected: boolean}>`
  margin: 30px 0;
  display:  ${props => props.selected ? 'visible' : 'none'};
  height:  ${props => props.selected ? '48px' : '0'};
  /* TODO: transition */
  transition: height .25s cubic-bezier(.4,0,.2,1);
`;

export const IconWrapper = styled.span<SelectProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.selected ? 'rotate(180deg)' : ''};
  transition: all 300ms ease-out;
`;