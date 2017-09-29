import reducer from './blogReducer';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({});
});

it('should should handle BLOG_QUERY_RESULTS', () => {
  expect(
    reducer(
      {},
      {
        type: 'BLOG_QUERY_RESULTS',
        blogQueryResult: { someProp: 1 }
      }
    )
  ).toEqual({ blogQueryResult: { isFetching: false, someProp: 1 } });
});

it('should should handle POST_GET_RESULT', () => {
  expect(
    reducer(
      {},
      {
        type: 'POST_GET_RESULT',
        post: { someProp: 1 }
      }
    )
  ).toEqual({
    post: { someProp: 1 }
  });
});
