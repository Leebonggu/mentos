import { Container } from './styles';
import Swiper from '@components/Swiper'
import PhotoCard from '@components/PhotoCard'
import CommunityCard from '@components/CommunityCard';
import HomeCardSection from '@components/HomeCardSection';
import Banner from '@components/Banner';

interface campMock {
  imgUrl?: string;
  status?: string;
  field?: string;
  dueDate?: string;
  title?: string;
}

const campMock: campMock[] = [
  {
    imgUrl: 'string',
    status: 'string',
    field: 'string',
    dueDate: 'string',
    title: 'string',
  },
  {
    imgUrl: 'string',
    status: 'string',
    field: 'string',
    dueDate: 'string',
    title: 'string',
  }
];

const communityMock = [
  {
    title: 'title',
    article:'world',
    tags: ["1", "2"],
    nickname: 'nick',
    text: 'wow',
  },
  {
    title: 'title',
    article:'world',
    tags: ["1", "2"],
    nickname: 'nick',
    text: 'wow',
  }
]

function Home() {
  return (
    <>
      <Swiper />
      <Container>
        <HomeCardSection title='인기 부트 캠프'>
          <PhotoCard data={campMock}/>
        </HomeCardSection>
        <HomeCardSection  title='특가 할인 캠프'>
          <PhotoCard data={campMock}/>
        </HomeCardSection>
        <Banner />
        <HomeCardSection title='커뮤니티'>
          <CommunityCard data={communityMock}/>
        </HomeCardSection>
      </Container>
    </>
  )
}

export default Home;
