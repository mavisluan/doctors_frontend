import axios from 'axios';

const url = 'http://localhost:8000';

export const fetchAll = async () => axios.get(`${url}/doctors`);
export const fetchById = async id => axios.get(`${url}/doctors/${id}`);
