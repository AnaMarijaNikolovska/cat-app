import axios from "axios";

const api = axios.create({
    baseURL: "https://catfact.ninja",
});

const CatService = {
    getAllBreeds: async () => {
        try {
            const response = await api.get('/breeds');
            console.log("API Response:", response);

            // Accessing and sorting the breeds
            const breeds = response.data.data.sort((a, b) => a.breed.localeCompare(b.breed));

            return breeds;
        } catch (error) {
            console.error("Error fetching cat breeds:", error);
            throw error;
        }
    },

    getAllCatFacts: async (page = 1) => {
        try {
            const response = await api.get(`/facts?page=${page}`);
            console.log("API Response:", response.data);

            const facts = response.data.data;
            const totalPages = response.data.last_page;
            return {data: facts, totalPages};
        } catch (error) {
            console.error('Error fetching cat facts:', error);
            throw error;
        }
    },

    getRandomFact: async () => {
        try {
            const response = await api.get('/fact');
            console.log("API Response:", response.data);

            const fact = response.data.fact;
            return fact;
        } catch (error) {
            console.error("Error fetching cat fact:", error);
            throw error;
        }
    },
};

export default CatService;
