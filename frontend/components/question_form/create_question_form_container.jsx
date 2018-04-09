import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createQuestion, clearFormErrors } from '../../actions/question_actions';
import QuestionForm from './question_form';

const mapStateToProps = ({ errors }) => ({
  question: { body: '', answer: ''},
  errors: errors.question,
  formType: 'Create Question'
});

const mapDispatchToProps = dispatch => ({
  submitForm:  question => dispatch(createQuestion(question)),
  clearFormErrors: () => dispatch(clearFormErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
