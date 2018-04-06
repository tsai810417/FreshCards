import { connect } from 'react-redux';

import DeckIndex from './deck_index';
import { fetchDecks } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  decks: Object.keys(state.decks).map(id => state.decks[id]),
  indexType: 'all'
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(fetchDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndex);
