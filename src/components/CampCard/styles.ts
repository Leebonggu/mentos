import styled from 'styled-components';

interface ContainerProps {
  thumbnail?: string;
}
export const Container = styled.div<ContainerProps>`
  height: 280px;
  border-radius: 10px;
  background-image: ${props => `url(${props.thumbnail})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const PhotoCardBox = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 54.64%;
  bottom: 0%;
  width: 100%;
  /* absolute 이기때문에 패딩은 여기 */
  padding: 16px;
  height: calc(100%-54.64%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(39, 63, 40, 0) 0%, rgba(89, 89, 89, 0.558824) 15.62%, #000000 70.83%);

  .category {
    font-weight: ${props => props.theme.typography.weight.bold};
    font-size: ${props => props.theme.typography.size.xs};
    color: ${props => props.theme.color.white};
  }
  .title {
    font-weight: ${props => props.theme.typography.weight.bold};
    font-size: ${props => props.theme.typography.size.md};
    line-height: 1.2;
    color: ${props => props.theme.color.white};
  }
  .due-date {
    font-weight: ${props => props.theme.typography.weight.medium};
    font-size: ${props => props.theme.typography.size.xs};
    color: ${props => props.theme.color.white};
  }
`;