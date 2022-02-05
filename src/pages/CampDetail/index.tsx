import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetchErrorRedirect404 } from '@/libs/catchErrorAndRedirect';
import { getCamp, GET_CAMP_URL_BY_ID } from '@/apis/campAPI';
import { Container } from './styles';
import { ICampDetail } from '@/typings';
import { generateRandomBackgroundColor } from '@/libs/generateRandomColor';
import { TopBanner } from '@/components/CampDetail';
import Desciption from '@/components/CampDetail/Desciption';

function CampDetail() {
  const { id } = useParams();
  const { data, error } = useSWR<ICampDetail>(GET_CAMP_URL_BY_ID(id), getCamp, {
    dedupingInterval: 2000,
  });

  fetchErrorRedirect404(error);
  
  if (!data) return <Container>loading...</Container>
  
  return (
    <Container>
      <TopBanner bgColor={generateRandomBackgroundColor(id)} campDetail={data} />
      <Desciption bgColor={generateRandomBackgroundColor(id)} campDetail={data} />
    </Container>
  );
}

export default CampDetail;
