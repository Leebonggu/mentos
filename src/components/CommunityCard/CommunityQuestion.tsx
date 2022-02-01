import styled from 'styled-components';
import Tags from './Tags';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 8px 0;
  font-size: ${props => props.theme.typography.size.md};
  font-weight: ${props => props.theme.typography.weight.bold};
`;

const Article = styled.div`
  margin: 8px 0;
  font-size: ${props => props.theme.typography.size.sm};
  font-weight: ${props => props.theme.typography.weight.medium};
`;

interface CommunityCardArticleProps {
  tags: string[];
  title: string;
  content: string;
}
function CommunityCardArticle({ title, content, tags }: CommunityCardArticleProps) {
  return (
    <Container>
      <Tags tags={tags} />
      <Title>{title}</Title>
      <Article>{content}</Article>
    </Container>
  );
}

export default CommunityCardArticle;
