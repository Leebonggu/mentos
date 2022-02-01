import axios from 'axios';
import { CampType } from '@typings/index';

export const GET_CAMPS_URL = '/camps'
export const getCamps = async (url: string) => {
  return await axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      // error 대응
    })
}

export const GET_CAMPS_URL_BY_TYPE = (type: CampType) => `/camps?type=${type}`;
export const getCampByType = async(url: string) => {
  return await axios.get(url)
    .then(response => response.data.data)
}

export const GET_CAMP_URL_BY_ID = (id: number) => `/camp/${id}`;
export const getCamp = async(url: string) => {
  return await axios.get(url)
    .then(response => response.data.data)
    .catch(error => {
      console.error(error);
      // error 대응
    })
}