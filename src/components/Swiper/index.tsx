import { useEffect, useState } from 'react';
import { SWIPER_IMAGE } from '@/constants';
import { ArrowRightIcon } from '@/assets/svg/ArrowRightIcon';
import { ArrowLeftIcon } from '@/assets/svg/ArrowLeftIcon';
import {
  SwiperContainer,
  SwiperContents,
  TypingContainer,
  ImageContainer,
  Title,
  Image,
  ArrowButtonsWrapper,
  DotsContainer,
  Dot,
} from './styles';

function Swiper() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getNextImage = () => {
    setCurrentImageIndex(prev => (prev + 1)  % SWIPER_IMAGE.length);
  };
  
  const getPrevImage = () => {
    setCurrentImageIndex(prev => (prev -1 + SWIPER_IMAGE.length) % SWIPER_IMAGE.length);
  };

  const handleSelectImage = (idx: number) => {
    setCurrentImageIndex(idx);
  }

  useEffect(() => {
    const index = setInterval(() => {
      getNextImage();
    }, 2000)
    return () => clearInterval(index);
  }, []);

  return (
    <SwiperContainer>
      <SwiperContents>
        <TypingContainer>
          <Title>
            <div className='text'>그 해 우리는...</div>
            <div className='text'>SBS 월화 10시 본방</div>
          </Title>
          <ArrowButtonsWrapper>
            <div className='devider'/>
            <div className='icons'>
              <ArrowLeftIcon color="#fff"  onClick={getPrevImage}/>
              <ArrowRightIcon color="#fff" onClick={getNextImage}/>
            </div>
          </ArrowButtonsWrapper>
        </TypingContainer>
        <ImageContainer>
          {
            SWIPER_IMAGE.map((img, index) => {
              return <Image key={index} imgUrl={img} index={currentImageIndex}></Image>
            })
          }
          <DotsContainer>
            {Array.from({ length: SWIPER_IMAGE.length }).map((_, index) => (
              <Dot
                key={index}
                selected={currentImageIndex === index}
                onClick={() => handleSelectImage(index)}
              />)
            )}
          </DotsContainer>
        </ImageContainer>
      </SwiperContents>
    </SwiperContainer>
  )
}

export default Swiper;
