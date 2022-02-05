import dayjs from 'dayjs';
import { Camp } from '@/typings/index';
import { Container, PhotoCardBox } from './styles';
import { Link } from 'react-router-dom';
import { generateCategoryByCampType } from '@/libs/generateCategoryByCampType';

function PhotoCardContent(props: Camp) {
  const { thumbnail, startDate, name, id, type } = props;
  return (
    <Link to={`/detail/${id}`}>
      <Container thumbnail= {thumbnail}>
          <PhotoCardBox>
            <span className='category'>{generateCategoryByCampType(type, props)}</span>
            <span className='title'>{name}</span>
            <span className='due-date'>{dayjs(startDate).format('YYYY-MM-DD일 부터')}</span>
          </PhotoCardBox>
      </Container>
    </Link>
  );
}

export default PhotoCardContent;
