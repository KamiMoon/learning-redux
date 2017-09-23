import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { BoostrapInput } from '../components/BootstrapFields';
import { displayErrors, success } from '../components/Feedback';
import { required, email } from '../components/FieldValidators';
import { Link } from 'react-router-dom';

import AuthService from '../util/AuthService';

class Login extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit = values => {
    AuthService.login(values.email, values.password).then(
      () => {
        success('Logged In');

        AuthService.getUser().then(user => {
          this.props.history.push('/profile/' + user._id);
        });
      },
      error => {
        displayErrors(error);
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
  form: 'Login'
})(Login);

export default Login;
