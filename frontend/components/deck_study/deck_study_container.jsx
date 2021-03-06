import { connect } from 'react-redux';

import DeckStudy from './deck_study';
import { fetchDeck } from '../../actions/deck_actions';
import {
  nextQuestion,
  prevQuestion,
  revealAnswer,
  receiveMastery,
  updateProgress,
  fetchProgress
} from '../../actions/progress_actions';

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.match.params.deckId];
  return ({
    deck: deck,
    questions: state.questions,
    currentUser: state.session.currentUser,
    progress: state.progress
  });
}

const mapDispatchToProps = dispatch => ({
  fetchDeck: id => dispatch(fetchDeck(id)),
  nextQuestion: () => dispatch(nextQuestion()),
  prevQuestion: () => dispatch(prevQuestion()),
  revealAnswer: () => dispatch(revealAnswer()),
  receiveMastery: mastery => dispatch(receiveMastery()),
  fetchProgress: deckId => dispatch(fetchProgress(deckId)),
  updateProgress: progress => dispatch(updateProgress(progress))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckStudy);
