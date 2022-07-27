import httpClient from '../http-common';

const getAll = () =>{
    return httpClient.get('/tolls');
}

const create = (data) => {
    return httpClient.post("/tolls", data)
}

const get = id =>{
    return httpClient.get(`/tolls/${id}`);
}

const update = (data) =>{
    return httpClient.put('/tolls', data);
}

const remove = id => {
    return httpClient.delete(`/tolls/${id}`)
}

export default {getAll, create, get, update, remove };