import axios from 'axios';

export const getCommunities = async () => {
  return await axios.get('/communities')
    .then(response => response.data.data)
    .catch(error => console.error(error))
}

export const getCommunity = async (communityId: number) => {
  console.log(communityId)
  return await axios.get(`/communities/${communityId}`)
    .then(response => response.data.data)
    .catch(error => console.error(error))
}