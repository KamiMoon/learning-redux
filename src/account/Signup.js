import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-horizontal" name="form" noValidate>
              <fieldset>
                <legend>Register</legend>
                {/* <b-input type="email" model="vm.user.email" required="true"></b-input>
                            <b-input type="password" model="vm.user.password" required="true"></b-input>
                            <b-input type="password" label="Confirm Password" model="vm.user.confirmPassword" required="true"></b-input> */}
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
                <button className="btn btn-lg btn-success" type="submit">
                  Register
                </button>
                <a
                  style={{ marginLeft: '15px' }}
                  className="btn btn-lg btn-info"
                  href="/login"
                >
                  Login
                </a>
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
