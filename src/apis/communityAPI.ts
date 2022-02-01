import axios from 'axios';

export const COMMUNITIES_URL = '/communities';
export const getCommunities = async (url: string) => {
  return await axios.get(url)
    .then(response => response.data.data)
    .catch(error => console.error(error))
}

export const getCommunity = async (communityId: number) => {
  return await axios.get(`/communities/${communityId}`)
    .then(response => response.data.data)
    .catch(error => console.error(error))
}