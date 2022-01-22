import styled from 'styled-components';

interface ContainerProps {
  imgUrl?: string;
}
const Container = styled.div<ContainerProps>`
  width: 224px;
  height: 280px;
  border-radius: 10px;
  background-image: ${props => `url(${props.imgUrl})`};
  background-size: cover;
  position: relative;
`;

const PhotoCardBox = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 54.64%;
  bottom: 0%;
  width: 100%;
  height: calc(100%-54.64%);
  padding: 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(39, 63, 40, 0) 0%, rgba(89, 89, 89, 0.558824) 15.62%, #000000 70.83%);

  .field {
    font-weight: ${props => props.theme.typography.weight.bold};
    font-size: ${props => props.theme.typography.size.xs};
    color: ${props => props.theme.color.basic.white};
  }
  .title {
    font-weight: ${props => props.theme.typography.weight.bold};
    font-size: ${props => props.theme.typography.size.md};
    color: ${props => props.theme.color.basic.white};
  }
  .due-date {
    font-weight: ${props => props.theme.typography.weight.bold};
    font-size: ${props => props.theme.typography.size.xs};
    color: ${props => props.theme.color.basic.white};
  }
`;

interface PhotoCardProps {
  imgUrl?: string;
  status?: string;
  field?: string;
  dueDate?: string;
  title?: string;
}

function PhotoCard({ imgUrl, status, field, dueDate, title }: PhotoCardProps) {
  return (
    <Container imgUrl= {imgUrl}>
      <PhotoCardBox>
        <span className='field'>{status || field}</span>
        <span className='title'>{title}</span>
        <span className='due-date'>{dueDate}부터</span>
      </PhotoCardBox>
    </Container>
  );
}

export default PhotoCard;
