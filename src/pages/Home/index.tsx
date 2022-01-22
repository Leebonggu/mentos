import { Container } from './styles';
import Swiper from '@components/Swiper'
import PhotoCard from '@components/PhotoCard'
import CommunityCard from '@components/CommunityCard';
import HomeCardSection from '@components/HomeCardSection';
import Banner from '@components/Banner';
import { Camp } from '@/typings';

const campMock: Camp[] = [
  {
    id: 1,
    type: 'popular',
    thumbnail: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211130132957_f5410dba3c83c9ca9d3a19b9bff9af18.jpg',
    applyStatus: '모집전',
    skill: 'string',
    startDate: 'string',
    campTitle: 'string',
  },
  {
    id: 2,
    thumbnail: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211130132957_f5410dba3c83c9ca9d3a19b9bff9af18.jpg',
    applyStatus: '모집완료',
    skill: 'string',
    startDate: 'string',
    campTitle: 'string',
  },
  {
    id: 3,
    thumbnail: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211130132957_f5410dba3c83c9ca9d3a19b9bff9af18.jpg',
    applyStatus: '모집완료',
    skill: 'string',
    startDate: 'string',
    campTitle: 'string',
  },
  {
    id: 4,
    thumbnail: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211130132957_f5410dba3c83c9ca9d3a19b9bff9af18.jpg',
    applyStatus: '모집중',
    skill: 'string',
    startDate: 'string',
    campTitle: 'string',
  },
];

const communityMock = [
  { 
    id: 1,
    title: 'title',
    text:'world',
    author: 'nick',
    tags: ["1", "2", "3"],
    comments: [{
      id: 1,
      author: 'man',
      text: 'commeno',
    }]
  },
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
