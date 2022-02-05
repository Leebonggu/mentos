import { useNavigate } from 'react-router-dom';

export const fetchErrorRedirect404 = (...errors: unknown[]) => {
  const navigate = useNavigate();
  return errors.find(error => !error) && navigate('/404');
};