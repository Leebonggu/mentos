import { Camp } from '@/typings/index';
import { Container, PhotoCardBox } from './styles';

function PhotoCardContent({
  thumbnail, applyStatus, skill, startDate, campTitle
}: Partial<Camp>) {
  return (
    <Container thumbnail= {thumbnail}>
      <PhotoCardBox>
        <span className='category'>{applyStatus || skill}</span>
        <span className='title'>{campTitle}</span>
        <span className='due-date'>{startDate}부터</span>
      </PhotoCardBox>
    </Container>
  );
}

export default PhotoCardContent;
