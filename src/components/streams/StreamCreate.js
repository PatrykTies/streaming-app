import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';

class StreamCreate extends Component {
  renderError = formProps => {
    if (formProps.meta.error && formProps.meta.touched) {
      return (
        <div className='error__wrapper'>
          <div className='error__message'>{formProps.meta.error}</div>
        </div>
      );
    }
  };
  titleInput = formProps => {
    return (
      <div className='input-wrapper'>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete='off' />
        {this.renderError(formProps)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.titleInput} label='Enter Title' />
        <Field
          name='description'
          component={this.titleInput}
          label='Enter Description'
        />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title.';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description .';
  }
  return errors;
};

const formConnector = reduxForm({ form: 'streamCreate', validate })(
  StreamCreate
);

export default connect(
  null,
  { createStream }
)(formConnector);
