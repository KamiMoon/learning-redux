
export default function blogReducer(state = {}, action) {

    switch (action.type) {

        case 'BLOG_QUERY_RESULTS':
            return {
                blogQueryResult :{
                    isFetching: false,
                    ...action.blogQueryResult
                }
            };
        case 'POST_GET_RESULT':
            return {
                post: action.post
            };
        default:
            return state
    }
}
