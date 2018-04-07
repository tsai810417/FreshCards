import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeck } from '../../actions/deck_actions';
import { selectDeckQuestions } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.match.params.deckId];
  return ({
    deck,
    questions: selectDeckQuestions(state, deck)
  });
}

const mapDispatchToProps = dispatch => ({
  fetchDeck: id => dispatch(fetchDeck(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);
