import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class DeckStudy extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };

    // this.deck = this.props.deck;

    // this.questions = this.props.questions;
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleReveal = this.handleReveal.bind(this);
  }

  handleNext(e) {
    e.preventDefault();
    this.props.nextQuestion();
  }

  handlePrev(e) {
    e.preventDefault();
    this.props.prevQuestion();
  }

  handleReveal(e) {
    e.preventDefault();
    this.props.revealAnswer();
  }

  componentWillMount() {
    this.props.startStudy();
  }

  componentDidMount() {
    this.props.fetchDeck(this.props.match.params.deckId).then(() => (
      this.setState({ loading: false })
    ))
  }

  render() {
    if (this.state.loading) return null;

    const { deck, questions } = this.props;
    const qIdx = Object.keys(questions);
    const qCount = qIdx.length;

    let show;

    if (this.props.progress.reveal) {
      show = (
        <h3 className='deck-study-question'>{ questions[qIdx[this.props.progress.questionIdx]].answer }</h3>
      )
    } else {
      show = (
        <h3 className='deck-study-answer'>{ questions[qIdx[this.props.progress.questionIdx]].body }</h3>
      )
    }

    return (
      <div className='deck-study-container'>
        <h1 className='deck-study-title'>{ deck.title }</h1>
        <h3 className='deck-study-progress'>{ `${ this.props.progress.questionIdx + 1 }/${ qIdx.length }` }</h3>
        <div className='deck-study-content'>
          { this.props.progress.questionIdx > 0 ? (
            <button className='activate-button' onClick={ this.handlePrev }>&#8678;</button>
          ) : <button className='fake-button'>&#8678;</button>}
          { show }
          { this.props.progress.questionIdx < (qIdx.length - 1) ? (
            <button className='activate-button' onClick={ this.handleNext }>&#8680;</button>
          ) : <button className='fake-button'>&#8680;</button>}
        </div>
          <button className='deck-study-reveal' onClick={ this.handleReveal }>Reveal</button>
      </div>
    )
  }
 }

export default withRouter(DeckStudy);
