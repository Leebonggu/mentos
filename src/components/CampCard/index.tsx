import { Camp } from '@/typings/index';
import { Container, PhotoCardBox } from './styles';
import { Link } from 'react-router-dom';

function PhotoCardContent({
  thumbnail, status, skill, startDate, name, id,
}: Partial<Camp>) {
  return (
    <Link to={`/detail/${id}`}>
      <Container thumbnail= {thumbnail}>
          <PhotoCardBox>
            <span className='category'>{status || skill}</span>
            <span className='title'>{name}</span>
            <span className='due-date'>{startDate}부터</span>
          </PhotoCardBox>
      </Container>
    </Link>
  );
}

export default PhotoCardContent;
