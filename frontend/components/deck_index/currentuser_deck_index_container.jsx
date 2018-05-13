import { connect } from 'react-redux';

import CurrentUserDeckIndex from './currentuser_deck_index';
import { fetchCurrentUserDecks, deleteDeck } from '../../actions/deck_actions';
import { receiveCurrentUserProgresses } from '../../actions/session_actions';

const mapStateToProps = state => ({
  decks: Object.keys(state.decks).map(id => state.decks[id]),
  indexType: 'currentuser',
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: id => dispatch(fetchCurrentUserDecks(id)),
  deleteDeck: id => dispatch(deleteDeck(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUserDeckIndex);
