import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class DeckStudy extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchDeck(this.props.match.params.deckId)
    this.deck = this.props.deck;
    this.qIdx = Object.keys(this.props.questions);
    this.qCount = this.qIdx.length;
    this.questions = this.props.questions;
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

  componentDidMount() {
    this.props.startStudy();
  }

  render() {
    let show;

    if (this.props.progress.reveal) {
      show = (
        <h3 className='deck-study-question'>{ this.questions[this.qIdx[this.props.progress.questionIdx]].answer }</h3>
      )
    } else {
      show = (
        <h3 className='deck-study-answer'>{ this.questions[this.qIdx[this.props.progress.questionIdx]].body }</h3>
      )
    }

    return (
      <div className='deck-study-container'>
        <h1 className='deck-study-title'>{ this.deck.title }</h1>
        <h3 className='deck-study-progress'>{ `${ this.props.progress.questionIdx + 1 }/${ this.qIdx.length }` }</h3>
        <div className='deck-study-content'>
          { this.props.progress.questionIdx > 0 ? (
            <button className='activate-button' onClick={ this.handlePrev }>&#8678;</button>
          ) : <button className='fake-button'>&#8678;</button>}
          { show }
          { this.props.progress.questionIdx < (this.qIdx.length - 1) ? (
            <button className='activate-button' onClick={ this.handleNext }>&#8680;</button>
          ) : <button className='fake-button'>&#8680;</button>}
        </div>
          <button className='deck-study-reveal' onClick={ this.handleReveal }>Reveal</button>
      </div>
    )
  }
 }

export default withRouter(DeckStudy);
