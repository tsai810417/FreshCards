
import { connect } from 'react-redux';

import DecksSearch from './decks_search';
import { fetchSearch } from '../../actions/decks_search_actions';

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  fetchSearch: () => dispatch(fetchSearch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksSearch);
