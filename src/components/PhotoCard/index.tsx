import PhotoCardContent from './PhotoCardContent';

interface PhotoCardContent{
  imgUrl?: string;
  status?: string;
  field?: string;
  dueDate?: string;
  title?: string;
}

interface PhotoCardProps {
  data?: PhotoCardContent[];
}
function PhotoCard({ data }: PhotoCardProps) {
  console.log(data)
  return (
    <>
      {data?.map((e, i)=> (
        <PhotoCardContent
          key={i}
          imgUrl={e.imgUrl}
          status={e.status}
          field={e.field}
          dueDate={e.dueDate}
          title={e.title}
        />))}
    </>
  )
}

export default PhotoCard;
