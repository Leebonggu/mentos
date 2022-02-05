export const secondToDate = (sec: number) => {
  const day = Math.floor(sec/(1000*60*60*24));
  const hours = Math.floor((sec % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((sec % (1000*60*60))/(1000*60));
  const seconds = Math.floor((sec % (1000*60))/1000);

  return `${day}일 ${hours}시간  ${minutes}분 ${seconds}초`;
};