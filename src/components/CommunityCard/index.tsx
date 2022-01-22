import { CommunityContainer, Contents } from './styles';
import CommunityCardArticle from './CommunityCardArticle';
import CommunityCardComments from './CommunityCardComments';
import MoreSee from './MoreSee';

function CommunityCard() {
  return (
    <CommunityContainer>
      <Contents>
        <CommunityCardArticle title='hello' article='world' tags={["1", "2"]}/>
        <CommunityCardComments />
        <MoreSee />
      </Contents>
    </CommunityContainer>
  );
}

export default CommunityCard;
