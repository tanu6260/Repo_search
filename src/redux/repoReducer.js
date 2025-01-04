import { FETCH_REPOSITORIES_FAILURE, FETCH_REPOSITORIES_REQUEST, FETCH_REPOSITORIES_SUCCESS, TOGGLE_FAVORITE } from "./repoAction";


const initialState = {
    repositories: [],
    favorites: [],
    status: 'idle',
    error: null,
};

const repoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPOSITORIES_REQUEST:
            return { ...state, status: 'loading', error: null };
        case FETCH_REPOSITORIES_SUCCESS:
            return { ...state, status: 'succeeded', repositories: action.payload };
        case FETCH_REPOSITORIES_FAILURE:
            return { ...state, status: 'failed', error: action.payload };
        case TOGGLE_FAVORITE:
            const repo = action.payload;
            const index = state.favorites.findIndex((fav) => fav.id === repo.id);

            if (index >= 0) {

                return {
                    ...state,
                    favorites: state.favorites.filter((fav) => fav.id !== repo.id),
                };
            } else {
             
                return {
                    ...state,
                    favorites: [...state.favorites, repo],
                };
            }
        default:
            return state;
    }
};

export default repoReducer;
