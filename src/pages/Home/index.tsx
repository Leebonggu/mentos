import { Container } from './styles';
import Swiper from '@components/Swiper'
import PhotoCardContent from '@/components/CampCard'
import CommunityCard from '@components/CommunityCard';
import HomeCardSection from '@components/HomeCardSection';
import Banner from '@components/Banner';
import { Camp } from '@/typings';
import { useMobileMode } from '@/hooks/useMobileWidth';

const campMock: Camp[] = [
  {
    id: 1,
    type: 'popular',
    thumbnail: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211130132957_f5410dba3c83c9ca9d3a19b9bff9af18.jpg',
    status: '모집전',
    skill: 'string',
    startDate: 'string',
    name: 'string',
  },
  {
    id: 2,
    thumbnail: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211130132957_f5410dba3c83c9ca9d3a19b9bff9af18.jpg',
    status: '모집완료',
    skill: 'string',
    startDate: 'string',
    name: 'string',
  },
  {
    id: 3,
    thumbnail: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211130132957_f5410dba3c83c9ca9d3a19b9bff9af18.jpg',
    status: '모집완료',
    skill: 'string',
    startDate: 'string',
    name: 'string',
  },
  {
    id: 4,
    thumbnail: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20211130132957_f5410dba3c83c9ca9d3a19b9bff9af18.jpg',
    status: '모집중',
    skill: 'string',
    startDate: 'string',
    name: 'string',
  },
];

const communityMock = [
  { 
    id: 1,
    title: 'title',
    text:'world',
    author: 'nick',
    tags: ["1", "2"],
    comments: [{
      id: 1,
      author: 'man',
      text: 'commeno',
    }]
  },
  { 
    id: 2,
    title: 'title',
    text:'world',
    author: 'nick',
    tags: ["1", "2",],
    comments: [{
      id: 1,
      author: 'man',
      text: 'commeno',
    }]
  },
  { 
    id: 3,
    title: 'title',
    text:'world',
    author: 'nick',
    tags: ["1", "2",],
    comments: [{
      id: 1,
      author: 'man',
      text: 'commeno',
    }]
  },
  { 
    id: 4,
    title: 'title',
    text:'world',
    author: 'nick',
    tags: ["1", "2",],
    comments: [{
      id: 1,
      author: 'man',
      text: 'commeno',
    }]
  },
]

function Home() {
  const isMobile = useMobileMode();

  return (
    <>
      <Swiper />
      <Container>
        <HomeCardSection title='인기 부트 캠프'>
          {campMock.map((camp) => (
            <PhotoCardContent
              key={camp.id}
              thumbnail={camp.thumbnail}
              status={camp.status}
              skill={camp.skill}
              startDate={camp.startDate}
              name={camp.name}
            />
          ))}
        </HomeCardSection>
        <HomeCardSection  title='특가 할인 캠프'>
          {campMock.map((camp) => (
            <PhotoCardContent
              key={camp.id}
              thumbnail={camp.thumbnail}
              status={camp.status}
              skill={camp.skill}
              startDate={camp.startDate}
              name={camp.name}
            />
          ))}
        </HomeCardSection>
        <Banner />
        <HomeCardSection title='커뮤니티' display={isMobile ? 'none' : ''}>
          {communityMock.map((commnunity) => (
            <CommunityCard
              key={commnunity.id}
              id={commnunity.id}
              title={commnunity.title}
              text={commnunity.text}
              tags={commnunity.tags}
              comments={commnunity.comments}
            />
          ))}
        </HomeCardSection>
      </Container>
    </>
  )
}

export default Home;
