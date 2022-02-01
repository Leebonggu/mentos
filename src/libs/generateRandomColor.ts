
export type BackgroundColor =
| '#7BB4FF'
| '#98CBFF'
| '#8CE9CA'
| '#A3D9DC'
| '#B8A7FF'
| '#FFB1CC'
| '#FFA482'
| '#CAD281'
| '#FFE198'
| '#D2AB7D'
| '#E9F3FF' // No uuid

const COLORS = [
  '#7BB4FF',
  '#98CBFF',
  '#8CE9CA',
  '#A3D9DC',
  '#B8A7FF',
  '#FFB1CC',
  '#FFA482',
  '#CAD281',
  '#FFE198',
  '#D2AB7D',
  '#E9F3FF', // No uuid
] as const

export const hashFunction = (key: string): number => {
  const changeUuidToNumber = (str: string) => parseInt(str, 32)
  const getHashKey = (key: string) => {
    return changeUuidToNumber(key) % COLORS.length
  }
  return getHashKey(key)
}

export const generateRandomBackgroundColor = (id: string): BackgroundColor => {
  const getBackgroundColor = (id: string): BackgroundColor => COLORS[hashFunction(id)]
  return id ? getBackgroundColor(id) : COLORS[0];
}