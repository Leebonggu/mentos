import { CampType } from '@typings/index';
import { serverAPI } from '.';

export const GET_CAMPS_URL = '/camps'
export const getCamps = async (url: string) => {
  return await serverAPI.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      // error 대응
    })
};

export const GET_CAMPS_URL_BY_TYPE = (type: CampType) => `/camps?type=${type}`;
export const getCampByType = async(url: string) => {
  return await serverAPI.get(url)
    .then(response => response.data.data)
    .catch(error => {
      console.error(error);
      // error 대응
    })
};

export const GET_CAMP_URL_BY_ID = (id?: string ) => `/camps/${id}`;
export const getCamp = async(url: string) => {
  return await serverAPI.get(url)
    .then(response => response.data.data)
    .catch(error => {
      console.error(error);
      // error 대응
    })
};