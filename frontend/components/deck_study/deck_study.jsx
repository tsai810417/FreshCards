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
        <div className='deck-study-container'>
          <Link to={`/decks/${this.props.deck.id}`} className='deck-study-x'>✕</Link>
          <div className='deck-study-mastery'>
            <p>Mastery</p>
            <h3>{ `${this.props.progress.mastery}%` }</h3>
          </div>
          <h1 className='deck-study-title'>{ `You finished studying: ${this.props.deck.title}!` }</h1>
          <div className='deck-study-selection'>
            <Link to={ `/decks/${this.props.deck.id}` }>Exit</Link>
            <button onClick={ this.handleRestart }>Restart</button>
          </div>
        </div>
      )
    }

    const { deck, questions } = this.props;
    const qIdx = Object.keys(questions);
    const qCount = qIdx.length;
    let show;

    if (this.props.progress.reveal) {
      show = (
        <div className='study-deck-card-answer'>
          <h3>{ questions[(qIdx[this.props.progress.questionIdx])].answer }</h3>
        </div>
      )
    } else {
      show = (
        <div className='study-deck-card-question'>
          <h3>{ questions[qIdx[this.props.progress.questionIdx]].body }</h3>
        </div>
      )
    }

    return (
      <div className='deck-study-container'>
        <div className='deck-study-mastery'>
          <p>Mastery of Deck</p>
          <h3>{ `${this.props.progress.mastery}%` }</h3>
        </div>
        <Link to={`/decks/${this.props.deck.id}`} className='deck-study-x'>✕</Link>
        <h1 className='deck-study-title'>{ `Studying: ${deck.title}` }</h1>
        <h3 className='deck-study-progress'>{ `${ this.props.progress.questionIdx + 1 } of ${ qIdx.length }` }</h3>
        <div className='deck-study-content'>
          { this.props.progress.questionIdx > 0 ? (
            <button className='activate-button' onClick={ this.handlePrev }>&#8678;</button>
          ) : <button className='fake-button'>&#8678;</button>}
          { show }
          { this.props.progress.questionIdx < (qIdx.length - 1) ? (
            <button className='activate-button' onClick={ this.handleNext }>&#8680;</button>
          ) : <button className='fake-button'>&#8680;</button>}
        </div>
        <div className='deck-study-selection'>
          { this.props.progress.reveal ? (
            <form className='deck-study-form'
              onSubmit={ this.handleSubmit }
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
      </div>
    )
  }
 }

export default withRouter(DeckStudy);
