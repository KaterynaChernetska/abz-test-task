import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

axios.defaults.baseURL = `${BASE_URL}`;

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

const getToken = async () => {
  try {
    const response = await axios.get('/token');
    //   console.log(response.data.token);
    return response.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (count) => {
  try {
    // await getToken();
    const { data } = await axios.get(`/users?page=1&count=${count}`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPositions = async () => {
  try {
    // await getToken();
    const { data } = await axios.get('/positions');
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async userData => {
    try {
        const token = await getToken();
        const response = await axios.post(`/users`, userData, {
          headers: { 'Content-Type': 'multipart/form-data', token },
        });
        return response.data;
  } catch (error) {
    console.log(error);
  }
};
