import axios from 'axios';

export const fetchUsers = async (count = 10) => {
  const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
  return response.data.results;
};