import { useMatch } from 'react-router-dom';

export const useIsLocationHome = () => {
  const match = useMatch('/');
  return match?.pathname === '/';
}