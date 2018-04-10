import * as APIUtil from '../util/deck_search_api_util';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = payload => ({
  type: RECEIVE_SEARCH,
  payload
});

export const fetchSearch = () => dispatch => (
  APIUtil.fetchSearch().then(payload => dispatch(receiveSearch(payload)))
);
