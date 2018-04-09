import { connect } from 'react-redux';

import DeckIndex from './deck_index';
import { fetchCurrentUserDecks, deleteDeck } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  decks: Object.keys(state.decks).map(id => state.decks[id]),
  indexType: 'currentuser'
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: id => dispatch(fetchCurrentUserDecks(id)),
  deleteDeck: id => dispatch(deleteDeck(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndex);