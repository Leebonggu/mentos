import { CommunityContainer, Contents } from './styles';
import CommunityCardArticle from './CommunityCardArticle';
import CommunityCardComments from './CommunityCardComments';
import MoreSee from './MoreSee';

interface CommunityType {
  title: string;
  article: string;
  tags: string[];
  nickname: string;
  text: string;
}

function Card({ title, article, tags, nickname, text }: CommunityType) {
  return (
    <CommunityContainer>
      <Contents>
        <CommunityCardArticle title={title} article={article} tags={tags}/>
        <CommunityCardComments nickname={nickname} text={text} />
        <MoreSee />
      </Contents>
    </CommunityContainer>
  );
}

export default Card;
