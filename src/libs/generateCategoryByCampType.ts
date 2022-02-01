import { CampType, Camp } from '@typings/index'

export const generateCategoryByCampType = (type: CampType | undefined, data: Camp): string => {
  switch(type) {
    case 'sale':
      return `${data.skill}`;
    case 'popular':
      return data.status;
    default:
      return data.status;
  }
};