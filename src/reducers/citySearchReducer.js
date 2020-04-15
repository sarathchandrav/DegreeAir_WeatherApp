export default ( state = [], action) => {
    switch (action.type) {
        case 'FETCH_SEARCH_CITY_API':
            return action.payload;
        default:
            return state;
        }
};