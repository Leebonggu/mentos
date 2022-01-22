import { ICommunity } from '@/typings';
import Card from './Card';

interface CommunityCardProps {
  data: ICommunity[];
}

function CommunityCard({ data }: CommunityCardProps) {
  return (
    <>
      {data.map((e) => 
        <Card
          key={e.id}
          id={e.id}
          title={e.title}
          text={e.text}
          tags={e.tags}
          comments={e.comments}
        />
      )}
    </>
  );
}

export default CommunityCard;
