import * as ajaxUtil from '../../redux/util/ajaxUtil';

export function query() {
    return function (dispatch) {

        return ajaxUtil.get(`/api/blog`).then(json =>
            dispatch({
                type: 'BLOG_QUERY_RESULTS',
                blogQueryResult: json
            })
        );
    }
}
