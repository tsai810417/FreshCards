import React from 'react';
import { Link , withRouter } from 'react-router-dom';

class DecksSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchString: '', showResults: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

  }

  componentWillMount() {
    this.props.fetchSearch();
  }

  handleClick(e) {
    this.setState({ searchString: '' });
  }

  handleFocus(e) {
    this.setState({ showResults: true })
  }

  handleBlur(e) {
    this.setState({ searchString: '', showResults: false })
  }

  update(event) {
    this.setState({ searchString: event.target.value });
  }

  render() {
    let filtered = [];
    if (this.state.searchString.length > 0) {
      filtered = this.props.search.filter( deck => deck.title.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1 )
    }

    let filteredDecks;
    if (filtered.length > 0) {
      filteredDecks = filtered.map( deck => {
        return (
          <li key={deck.id}
             className='decks-search-li'>
            <Link to={`/decks/${deck.id}`}
               onClick={ this.handleClick }
               className='decks-search-title'>{deck.title}</Link>
             <p className='decks-search-subject'>{deck.subject}</p>
          </li>
        )
      })
    }
    return (
      <div className='decks-search-container'>
        <input type='search'
          onChange={ this.update.bind(this) }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          value={this.state.searchString}
          placeholder='Search the decks'
          className='decks-search-input' />
        <ul className='decks-search-ul'>
          { (this.state.showResults) ? filteredDecks : null }
        </ul>

      </div>
    )
  }
}

export default withRouter(DecksSearch);
