import { CommunityContainer, Contents } from './styles';
import CommunityCardArticle from './CommunityQuestion';
import CommunityCardComments from './CommunityComments';
import MoreSee from './MoreSee';
import { ICommunity } from '@/typings';

function Card({
  title,
  tags,
  text,
  comments,
  id,
}: ICommunity) {
  return (
    <CommunityContainer>
      <Contents>
        <CommunityCardArticle title={title} article={text} tags={tags}/>
        <CommunityCardComments comments={comments} />
        <MoreSee id={id} />
      </Contents>
    </CommunityContainer>
  );
}

export default Card;
