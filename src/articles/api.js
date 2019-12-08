import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Articles
export const getAllArticles = function() {
  return axios.get(`${apiUrl}/articles`);
}

// Delete Article By ID
export const deleteArticleByID = function(id) {
  return axios.delete(`${apiUrl}/articles/${id}`);
}