import { MoreSeeContainer } from './styles';

function MoreSee({ id }: { id: number }) {
  return <MoreSeeContainer to={`/community/${id}`}>+더보기</MoreSeeContainer>;
}

export default MoreSee;
