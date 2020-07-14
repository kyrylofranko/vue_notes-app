import axios from 'axios';

export default () => axios.create({
  baseURL: 'https://vue-notes-app-cbd35.firebaseio.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
