import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseUrl} from '../src/config.json';
const API = axios.create({
  baseURL: baseUrl,
});
API.interceptors.request.use(async req => {
  const userdata = await AsyncStorage.getItem('profile');
  const data = JSON.parse(userdata);
  if (data?.token) {
    // when server firstly ask for token and furthter process done
    try {
      req.headers.authorization = `Bearer ${data.token}`;
    } catch (error) {
      console.log('in api erro' + error.respose);
    }
  }
  return req;
});

export default API;
