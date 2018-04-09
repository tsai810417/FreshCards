import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeck, deleteDeck } from '../../actions/deck_actions';
import { deleteQuestion } from '../../actions/question_actions'
// import { selectDeckQuestions } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.match.params.deckId];
  return ({
    deck: deck,
    currentUser: state.session.currentUser,
    questions: state.questions
  });
}

const mapDispatchToProps = dispatch => ({
  fetchDeck: id => dispatch(fetchDeck(id)),
  deleteDeck: id => dispatch(deleteDeck(id)),
  deleteQuestion: id => dispatch(deleteQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);
