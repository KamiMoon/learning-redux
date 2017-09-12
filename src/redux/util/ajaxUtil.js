/**
 * convenient defaults and helper methods
 * Wrapper over fetch.
 * 
 * TODO: error handling
 */

//https://github.com/mzabriskie/axios
import axios from 'axios';
//https://www.npmjs.com/package/universal-cookie
import Cookies from 'universal-cookie';


export function get(url, payload) {

    let request;
    
    if(payload){
        request = axios.get(url, {
            params: payload
          });
    }
    else{
        request = axios.get(url);
    }

    return request.then(response => response.data);
}

export function post(url, payload) {
    return axios.post(url, payload).then(response => response.data);
}

export function put(url, payload) {
    return axios.put(url, payload).then(response => response.data);
}

export function doDelete(url) {
    return axios.delete(url).then(response => response.data);
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(config.headers && config.headers.common){
        const cookies = new Cookies();
        const token = cookies.get('token');
        if(token){
            config.headers.common['Authorization'] = 'Bearer ' + token;            
        }
    }
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    
    if(response.status === 401){
        window.location = '/login';
        const cookies = new Cookies();
        cookies.remove('token');
    }

    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });