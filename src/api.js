import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/notes'; // Adjust as needed

export const getNotes = async () => {
    return await axios.get(API_BASE_URL);
};

export const createNote = async (content) => {
    try {
        const response = await axios.post(API_BASE_URL, { content });
        return response.data;
    } catch (error) {
        console.error("Error creating note:", error);
        return null;
    }
};

export const deleteNote = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/notes/${id}`);
        return true;
    } catch (error) {
        console.error("Error deleting note:", error);
        return false;
    }
};
