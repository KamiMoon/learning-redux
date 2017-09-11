
export default function blogReducer(state = {

}, action) {

    switch (action.type) {

        case 'BLOG_QUERY_RESULTS':
            return {
                ...state,
                isFetching: false,
                ...action.blogQueryResult,
            };

        default:
            return state
    }
}
