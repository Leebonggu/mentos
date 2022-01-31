import { Camp } from '@/typings/index';
import { Container, PhotoCardBox } from './styles';

function PhotoCardContent({
  thumbnail, status, skill, startDate, name
}: Partial<Camp>) {
  return (
    <Container thumbnail= {thumbnail}>
      <PhotoCardBox>
        <span className='category'>{status || skill}</span>
        <span className='title'>{name}</span>
        <span className='due-date'>{startDate}부터</span>
      </PhotoCardBox>
    </Container>
  );
}

export default PhotoCardContent;
