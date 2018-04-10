import React from 'react';
import { Link , withRouter } from 'react-router-dom';

class DecksSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchString: ''};
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    this.props.fetchSearch();
  }

  handleClick(e) {
    this.setState({ searchString: '' });
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
          onChange = { this.update.bind(this) } value={this.state.searchString} placeholder='Search the decks'
          className='decks-search-input' />
        <ul className='decks-search-ul'>
          { filteredDecks ? filteredDecks : '' }
        </ul>

      </div>
    )
  }
}

export default withRouter(DecksSearch);
