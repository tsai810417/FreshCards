import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
return ({
  deck: state.decks[ownProps.match.params.deckId]
});
}

const mapDispatchToProps = dispatch => ({
  fetchDeck: id => dispatch(fetchDeck(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);
