import api from './api';

export const fetchArticles = async () => { 
    const response = await api.get('/article/');
    return response.data;
}

// export const fetchArticleById = async (id) => {
//     const response = await api.get(`/article/${id}`);
//     return response.data;
// }

export const createArticle = async (articleData) => {
    const response = await api.post('/article/add', articleData);
    return response.data;
}

// export const updateArticle = async (id, articleData) => {
//     const response = await api.put(`/article/${id}`, articleData);
//     return response.data;
// }