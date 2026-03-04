import axios from "axios";
import file from '../card.json';

const api = axios.create({
    baseURL: file
})

export const fetchCardData = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error('Error fetching card data:', error);
        throw error;
    }
}