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
} from './styles';

// https://w.namu.la/s/b62f6b8e6fb3459e80d6f47b1be201fa9203d7b545dac84fa9508f8d03cd0df4ca1b2a55a6c62f47818418a0f6d4349476ed10fab8927a6f0ac696a9cba118e5329c6b14c70b804f1f060239753fbb7131b5aa4190f241af83e04e796bf08140
// https://w.namu.la/s/0ccd1efa4f256ea551fcf12e6248a9147f02e418e0e053ad73891d778a8cfe9c95cb2f05bbb6c4fc25514344fa5b4521b4bcf39464668b1e80f2a002625d5d2e061b4e47e0ef16dc6f0df755aa02faf3ec42b3ddb94e6ccfb29c7284bb1a96a3
// https://w.namu.la/s/0bc52cf36fab56c992f6b75a7fd54b2a9c9760a29194cfac011cc696daae5e00f27b2771a7f97149d7fa79fe32a3fc6cbae721b3ef5b580fda6df21e0f2ca8a05cfc9cd20b543806406bb55cc1ee188377d52735f6c350aadbc721f40e3891b0
// https://w.namu.la/s/8424086db0bf81ecfff9fc232134be51d4cd5016902b3eef0b3e3a6d733cf0bddd71f63a23a5c9ac37c1a63ff23c25b02bccb8bdf935f8ffd989f1ec433e40f8c4334484df4a58acbb951c064604ff868fd58ec92c905adf0d9919f2a4747bb69f99fb6f372b7b2067ad5db135fe3107
function Swiper() {
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
              <ArrowLeftIcon color="#fff" />
              <ArrowRightIcon color="#fff" />
            </div>
          </ArrowButtonsWrapper>
        </TypingContainer>
        <ImageContainer>
          <Image imgUrl={SWIPER_IMAGE[0]}></Image>
        </ImageContainer>
      </SwiperContents>
    </SwiperContainer>
  )
}

export default Swiper;
