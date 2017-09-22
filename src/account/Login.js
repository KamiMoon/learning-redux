import React, { Component } from 'react';

import { Field, reduxForm, SubmissionError } from 'redux-form';
import { BoostrapInput } from '../components/BootstrapFields';
import { required, email } from '../components/FieldValidators';
import { Link } from 'react-router-dom';

import AuthService from '../util/AuthService';

//Top level presentaitonal component
class Login extends Component {
  submit = values => {
    //AuthService.getCurrentUser();

    //TODO
    AuthService.login(values.email, values.password).then(
      () => {
        // AuthService.getUser().then(user => {
        //     console.log(user);
        // });
      },
      error => {
        console.log(error);
      }
    );
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form
                className="form-horizontal"
                onSubmit={handleSubmit(this.submit)}
                noValidate
              >
                <fieldset>
                  <legend>Login</legend>

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
                  <div>
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary"
                      disabled={submitting}
                    >
                      Login
                    </button>
                    <Link
                      style={{ marginLeft: '15px' }}
                      className="btn btn-lg btn-info"
                      to="/signup"
                    >
                      Register
                    </Link>
                  </div>
                  <br />
                  <br />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login = reduxForm({
  // a unique name for the form
  form: 'Login'
})(Login);

export default Login;
