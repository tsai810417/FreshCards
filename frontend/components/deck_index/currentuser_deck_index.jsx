import React from 'react';
import { Link } from 'react-router-dom';

class CurrentUserDeckIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDecks(1);
  }
}

export default CurrentUserDeckIndex;
