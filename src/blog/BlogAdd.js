import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, SubmissionError } from 'redux-form';

import BInput from '../components/BInput';
import {BoostrapInput, BoostrapTextArea} from '../components/BootstrapFields';


import {create} from './redux/blogActions';

const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    } 

    if (!values.headingQuote) {
      errors.headingQuote = 'Required'
    } 

    return errors;
}

class BlogAdd extends Component  {

    submit = (values) => {
        /*
        return new Promise( ( resolve, reject) => {
            console.log('submit');


            if(values.title === 'fail'){
                 throw new SubmissionError({
                 title: 'Title not unique',
                 _error: 'Login failed!'
               });
            }
            
            resolve();
        });*/

        const result = this.props.dispatch(create(values));

        //const result=create();

        console.log(result);

        return result;
    }

    render() {
        return (
            <div className="container">

                {this.props.submitSucceeded && <h2>Success!</h2>}

                {this.props.submitFailed && <h2>Submit Failed</h2>}

                <form name="form" onSubmit={ this.props.handleSubmit(this.submit)}>
                    <div className="row">
                        <div className="col-md-12">
                            <h3><span className="glyphicon glyphicon-globe"></span> Post Info:</h3>
                            <div className="form-horizontal">
                                <Field name="title" component={BoostrapInput} label="Title" />
                                <Field name="headingQuote" component={BoostrapTextArea} rows="5" cols="6" label="Quote" />


                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submti" className="btn btn-success" disabled={this.props.pristine || this.props.submitting}>Submit</button>
                            <br />
                            <br />
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

BlogAdd = reduxForm({
    // a unique name for the form
    form: 'BlogAdd',
    validate
  })(BlogAdd)
  
//BlogAdd = connect()(BlogAdd);

export default BlogAdd;