/**
 * convenient defaults and helper methods
 * Wrapper over fetch.
 * 
 * TODO: error handling
 */

//import fetch from 'isomorphic-fetch';
import axios from 'axios';


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

