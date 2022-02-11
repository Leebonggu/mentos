
// components
import { Tiger } from '@/icons/Tiger';
import Icon from '../atom/Icon';
// styles
import { Container, Description, IconWrapepr } from './Introduce.style';

function Introduce() {
  return (
    <Container>
      <Description>
        <h3>만나서 반가워요</h3>
        <div>저는 5~7년차 경럭자 구민정 멘토 입니다</div>
        <div>React 과정에 관심가져줘서 고마워요 :)</div>
        <div>간단한 자기소개를 해주세요</div>
        <div className='triangle' />
      </Description>
      <IconWrapepr>
        <Icon width={64} height={64}>
          <Tiger />
        </Icon>
        <span className='mento-name'>구민정 멘토</span>
      </IconWrapepr>
    </Container>
  );  
}

export default Introduce