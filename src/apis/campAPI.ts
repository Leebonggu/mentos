import axios from 'axios';
import { CampType } from '@typings/index';

export const getCamps = async () => {
  return await axios.get('/camps')
    .then(response => response.data.data)
    .catch(error => {
      console.error(error);
      // error 대응
    })
}

export const getCampByType = async(type: CampType) => {
  return await axios.get(`/camps?type=${type}`)
    .then(response => response.data.data)
    .catch(error => {
      console.error(error);
      // error 대응
    })
}

export const getCamp = async(campId: number) => {
  return await axios.get(`/camps/${campId}`)
    .then(response => response.data.data)
    .catch(error => {
      console.error(error);
      // error 대응
    })
}