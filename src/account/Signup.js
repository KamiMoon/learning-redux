import React, { Component } from 'react';

import { Field, reduxForm, SubmissionError } from 'redux-form';
import { BoostrapInput } from '../components/BootstrapFields';
import { required, email } from '../components/FieldValidators';
import { Link } from 'react-router-dom';

export class Signup extends Component {
  submit = values => {};

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form
              className="form-horizontal"
              onSubmit={handleSubmit(this.submit)}
            >
              <fieldset>
                <legend>Register</legend>

                <Field
                  name="email"
                  type="email"
                  component={BoostrapInput}
                  label="Email"
                  validate={[required, email]}
                />
                <Field
                  name="password"
                  type="password"
                  component={BoostrapInput}
                  label="Password"
                  validate={[required]}
                />
                <Field
                  name="confirmPassword"
                  type="password"
                  component={BoostrapInput}
                  label="Confirm Password"
                  validate={[required]}
                />

                <div className="form-group required">
                  <label
                    htmlFor="UserConfirmPassword"
                    className="col-lg-2 control-label"
                  >
                    Agree to{' '}
                    <a href="/terms" target="_blank">
                      Terms and Conditions
                    </a>
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="checkbox"
                      required="true"
                      name="terms"
                      className="form-control"
                      style={{ width: '32px' }}
                      value="1"
                    />
                    <p className="help-block">
                      Please accept the terms and conditions
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label" />
                  <div className="col-lg-10">
                    {/* <div vc-recaptcha key="'6LdS5BMTAAAAACcWJA-nZhB34kFMfM5Rfyu6RrAV'"></div> */}
                  </div>
                </div>
              </fieldset>
              <br />
              <div>
                <button
                  className="btn btn-lg btn-success"
                  type="submit"
                  disabled={submitting}
                >
                  Register
                </button>
                <Link
                  style={{ marginLeft: '15px' }}
                  className="btn btn-lg btn-info"
                  to="/login"
                >
                  Login
                </Link>
              </div>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'Signup'
})(Signup);
