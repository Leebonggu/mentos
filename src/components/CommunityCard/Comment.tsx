import Icon from '@components/atom/Icon';
import {
  CommentContainer,
  CommentContents,
  AuthorName,
  Text,
} from './styles';

interface CommentProps {
  author: string;
  text: string;
}
function Comment({ author, text }: CommentProps) {
  return (
    <CommentContainer>
      <Icon bgColor='#EEEEEE'/>
      <CommentContents>
        <AuthorName>{author}</AuthorName>
        <Text>{text}</Text>
      </CommentContents>
    </CommentContainer>
  );
}

export default Comment;
