import { connect } from 'react-redux';
import Landing from './landing';
import { fetchDeck } from '../../actions/deck_actions';

const mapStateToProps = ({ decks }) => ({
  decks
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(fetchDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
