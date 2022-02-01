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
  profile: string;
}
function Comment({ author, text, profile }: CommentProps) {
  return (
    <CommentContainer>
      <Icon>
        <img src={profile} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>
      </Icon>
      <CommentContents>
        <AuthorName>{author}</AuthorName>
        <Text>{text}</Text>
      </CommentContents>
    </CommentContainer>
  );
}

export default Comment;
