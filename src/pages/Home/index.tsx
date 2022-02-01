import useSWR from 'swr';
import { Container } from './styles';
import Swiper from '@components/Swiper'
import PhotoCardContent from '@/components/CampCard'
import CommunityCard from '@components/CommunityCard';
import HomeCardSection from '@components/HomeCardSection';
import Banner from '@components/Banner';
import { Camp, ICommunity } from '@/typings';
import { useMobileMode } from '@/hooks/useMobileWidth';
import { getCampByType, GET_CAMPS_URL_BY_TYPE } from '@/apis/campAPI';
import { COMMUNITIES_URL, getCommunities } from '@/apis/communityAPI';
import { fetchErrorRedirect404 } from '@/libs/catchErrorAndRedirect';

function Home() {
  const isMobile = useMobileMode();
  const { data: popularCamps, error: popularCampError } = useSWR<Camp[]>(GET_CAMPS_URL_BY_TYPE('popular'), getCampByType)
  const { data: saleCamps, error: saleCampError } = useSWR<Camp[]>(GET_CAMPS_URL_BY_TYPE('sale'), getCampByType)
  const { data: communities, error: communitiesError } = useSWR<ICommunity[]>(COMMUNITIES_URL, getCommunities)
  
  fetchErrorRedirect404(popularCampError,saleCampError, communitiesError)
  if (!popularCamps || !saleCamps || !communities) return <div>Loading...</div>;


  return (
    <>
      <Swiper />
      <Container>
        <HomeCardSection title='인기 부트 캠프'>
          {popularCamps.map((camp) => (
            <PhotoCardContent
              key={`${camp.name}-${camp.id}`}
              id={camp.id}
              thumbnail={camp.thumbnail}
              status={camp.status}
              skill={camp.skill}
              startDate={camp.startDate}
              name={camp.name}
              type={camp.type}
            />
          ))}
        </HomeCardSection>
        <HomeCardSection  title='특가 할인 캠프'>
          {saleCamps.map((camp) => (
            <PhotoCardContent
              key={`${camp.name}-${camp.id}`}
              id={camp.id}
              thumbnail={camp.thumbnail}
              status={camp.status}
              skill={camp.skill}
              startDate={camp.startDate}
              name={camp.name}
              type={camp.type}
            />
          ))}
        </HomeCardSection>
        <Banner />
        <HomeCardSection title='커뮤니티' display={isMobile ? 'none' : ''}>
          {communities?.map((commnunity) => (
            <CommunityCard
              key={commnunity.id}
              id={commnunity.id}
              title={commnunity.title}
              content={commnunity.content}
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
