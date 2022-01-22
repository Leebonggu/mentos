import { Camp } from '@/typings';
import Card from './Card';


interface PhotoCardProps {
  data?: Camp[];
}
function PhotoCard({ data }: PhotoCardProps) {
  return (
    <>
      {data?.map((e)=> (
        <Card
          key={e.id}
          thumbnail={e.thumbnail}
          applyStatus={e.applyStatus}
          skill={e.skill}
          startDate={e.startDate}
          campTitle={e.campTitle}
        />))}
    </>
  )
}

export default PhotoCard;
