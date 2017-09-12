
export default function blogReducer(state = {}, action) {

    switch (action.type) {

        case 'BLOG_QUERY_RESULTS':
            return {
                ...state,
                blogQueryResult :{
                    isFetching: false,
                    ...action.blogQueryResult
                }
            };
        case 'POST_GET_RESULT':
            return {
                ...state,
                post: action.post
            };
        default:
            return state
    }
}
