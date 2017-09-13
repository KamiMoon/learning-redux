const baseUrl = '/api/blog';

export function query(searchParams) {
    return {
        method: 'GET',
        url: baseUrl,
        successType: 'BLOG_QUERY_RESULTS',
        successProp: 'blogQueryResult',
        payload: searchParams
    };
}

export function get(id) {
    return {
        method: 'GET',
        url: `${baseUrl}/${id}`,
        successType: 'POST_GET_RESULT',
        successProp: 'post'
    };
}

export function update(post) {
    return {
        method: 'PUT',
        url: `${baseUrl}/${post._id}`,
        successType: 'POST_PUT_RESULT',
        successProp: 'post',
        payload: post
    };
}

export function create(post) {
    return {
        method: 'POST',
        url: `${baseUrl}`,
        successType: 'POST_POST_RESULT',
        successProp: 'post',
        payload: post,
        showLoadingSpinner: true
    };
}

export function doDelete(id) {
    return {
        method: 'DELETE',
        url: `${this.url}/${id}`,
        successType: 'POST_DELETE_RESULT'
    };
}