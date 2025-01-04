import axios from 'axios';

const API_URL = 'https://api.github.com/search/repositories?q=';


export const FETCH_REPOSITORIES_REQUEST = 'FETCH_REPOSITORIES_REQUEST';
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';
export const FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';


export const fetchRepositoriesRequest = () => ({
  type: FETCH_REPOSITORIES_REQUEST,
});

export const fetchRepositoriesSuccess = (repositories) => ({
  type: FETCH_REPOSITORIES_SUCCESS,
  payload: repositories,
});

export const fetchRepositoriesFailure = (error) => ({
  type: FETCH_REPOSITORIES_FAILURE,
  payload: error,
});

export const toggleFavorite = (repo) => ({
  type: TOGGLE_FAVORITE,
  payload: repo,
});

export const fetchRepositories = (query) => async (dispatch) => {
  dispatch(fetchRepositoriesRequest());
  try {
    const response = await axios.get(`${API_URL}${query}`);
    dispatch(fetchRepositoriesSuccess(response.data.items));
  } catch (error) {
    dispatch(fetchRepositoriesFailure(error.message));
  }
};
