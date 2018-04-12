import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class DeckStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true,
      deckId: this.props.match.params.deckId, finish: false
     }

    // this.deck = this.props.deck;
    // this.questions = this.props.questions;
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleReveal = this.handleReveal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
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

  handleRestart(e) {
    e.preventDefault();
    this.setState({ finish: false})
    this.props.fetchProgress(this.props.match.params.deckId);
  }

  componentWillMount() {
    this.props.fetchProgress(this.props.match.params.deckId);
  }

  componentDidMount() {
    this.props.fetchDeck(this.props.match.params.deckId).then(() => (
      this.setState({ loading: false })
    ))
  }

  update(e) {
    this.setState({ 'score': e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let qId = this.props.progress.questionIdx
    let question_id = this.props.deck.questions[qId]
    let newProgress = Object.assign({}, this.state, {'questionId': question_id})
    if (qId + 1 === this.props.deck.questions.length) {
      this.props.updateProgress(newProgress).then(() => (
        this.setState({ finish: true})
      ))
    } else {
      this.props.updateProgress(newProgress).then(() => this.props.nextQuestion())
    }
  }

  render() {
    if (this.state.loading) return null;
    if (this.state.finish) {
      return (
        <div>
          <h3>Finish Studying</h3>
          <h3>{`Your mastering of ${this.props.deck.title} is ${this.props.progress.mastery}`}</h3>
          <Link to={ '/decks/' }>Exit</Link>
          <button onClick={ this.handleRestart }>Restart</button>
        </div>
      )
    }

    const { deck, questions } = this.props;
    const qIdx = Object.keys(questions);
    const qCount = qIdx.length;

    let show;

    if (this.props.progress.reveal) {
      show = (
        <h3 className='deck-study-question'>{ questions[(qIdx[this.props.progress.questionIdx])].answer }</h3>
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
        <p className='deck-study-mastery'>{ `${this.props.progress.mastery}%` }</p>
        <div className='deck-study-content'>
          { this.props.progress.questionIdx > 0 ? (
            <button className='activate-button' onClick={ this.handlePrev }>&#8678;</button>
          ) : <button className='fake-button'>&#8678;</button>}
          { show }
          { this.props.progress.questionIdx < (qIdx.length - 1) ? (
            <button className='activate-button' onClick={ this.handleNext }>&#8680;</button>
          ) : <button className='fake-button'>&#8680;</button>}
        </div>
          { this.props.progress.reveal ? (
            <form onSubmit={ this.handleSubmit }
              onChange={ (e) => this.update(e) }
              name='mastery'>
              <p>Please select mastery level:</p>
              <div>
                <label>1
                  <input type='radio' name='mastery' value='1' />
                </label>
                <label>2
                  <input type='radio' name='mastery' value='2' />
                </label>
                <label>3
                  <input type='radio' name='mastery' value='3' />
                </label>
                <label>4
                  <input type='radio' name='mastery' value='4' />
                </label>
                <label>5
                  <input type='radio' name='mastery' value='5' />
                </label>
              </div>
              <input type='submit' value='submit' />
            </form>
          ) : (
            <button className='deck-study-reveal' onClick={ this.handleReveal }>Reveal</button>
          )}
      </div>
    )
  }
 }

export default withRouter(DeckStudy);
