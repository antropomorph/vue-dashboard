import axios from 'axios';

const baseDomain = 'http://seleznev:3000';

// const baseUrl = `${baseDomain}/api`;

export function getDashboard() {
    return axios.get(`${baseDomain}/dashboard`);
}
