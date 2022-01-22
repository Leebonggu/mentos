import Card from './Card';


interface CommunityType {
  title: string;
  article: string;
  tags: string[];
  nickname: string;
  text: string;
}
interface CommunityCardProps {
  data: CommunityType[];
}

function CommunityCard({ data }: CommunityCardProps) {
  return <>{data.map((e, i) => 
    <Card
      key={i}
      title={e.title}
      article={e.article}
      tags={e.tags}
      nickname={e.nickname}
      text={e.text}
    />
  )}</>
}

export default CommunityCard;
