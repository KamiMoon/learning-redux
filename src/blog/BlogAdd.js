import React, { Component } from 'react';
import BInput from '../components/BInput';

import { Field, reduxForm } from 'redux-form';
import {BoostrapInput, BoostrapTextArea}from '../components/BootstrapFields';


const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    } 

    if (!values.headingQuote) {
      errors.headingQuote = 'Required'
    } 

    return errors
  }


 


let BlogAdd = props => {
    const { handleSubmit } = props
    
        return (
            <div className="container">
                <form name="form" onSubmit={ handleSubmit }>
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
                            <button type="submti" className="btn btn-success">Submit</button>
                            <br />
                            <br />
                        </div>
                    </div>
                </form>
            </div>

        );
}

BlogAdd = reduxForm({
    // a unique name for the form
    form: 'BlogAdd',
    validate
  })(BlogAdd)
  
  export default BlogAdd;