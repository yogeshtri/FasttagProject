import httpClient from '../http-common';

const getAll = () =>{
    return httpClient.get('/charges');
}

const create = (data) => {
    return httpClient.post("/charges", data)
}

const get = id =>{
    return httpClient.get(`/charges/${id}`);
}

const update = (data) =>{
    return httpClient.put('/charges', data);
}

const remove = id => {
    return httpClient.delete(`/charges/${id}`)
}


export default {getAll, create, get, update, remove};