import { serverAPI } from '.';

export const COMMUNITIES_URL = '/communities';
export const getCommunities = async (url: string) => {
  return await serverAPI.get(url)
    .then(response => response.data.data)
    .catch(error => console.error(error))
};

export const getCommunity = async (communityId: number) => {
  return await serverAPI.get(`/communities/${communityId}`)
    .then(response => response.data.data)
    .catch(error => console.error(error))
};