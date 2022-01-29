import Icon from '@/components/atom/Icon';
import { IconProps  } from '@/typings';

export const SocialTwitterIconFill = (props: IconProps) => {
  return (
    <Icon {...props} bgColor='#63B3ED'>
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2835 0.428571H2.71205C1.29241 0.428571 0.140625 1.58036 0.140625 3V11.5714C0.140625 12.9911 1.29241 14.1429 2.71205 14.1429H7.46205V8.83036H5.67634V6.75893H7.46205V5.23214C7.46205 3.46428 8.55134 2.5 10.1317 2.5C10.8817 2.5 11.5335 2.55357 11.721 2.58036V4.42857L10.6317 4.4375C9.76562 4.4375 9.60491 4.83928 9.60491 5.4375V6.75893H11.6496L11.3817 8.83036H9.60491V14.1429H11.2835C12.7031 14.1429 13.8549 12.9911 13.8549 11.5714V3C13.8549 1.58036 12.7031 0.428571 11.2835 0.428571Z" fill="white"/>
      </svg>
    </Icon>
  );
}
